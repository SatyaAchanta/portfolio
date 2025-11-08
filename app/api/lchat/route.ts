import { createAgent, createMiddleware, tool, ToolMessage } from "langchain";
import { ChatOpenAI } from "@langchain/openai";
import * as z from "zod";
import { MATHEMATICIAN_PROMPT } from "@/app/consts/prompts";

/**
 * Note: Do not use this. Not working. We will get back to this later.
 */

const handleToolErrors = createMiddleware({
  name: "HandleToolErrors",
  wrapToolCall: (request, handler) => {
    try {
      return handler(request);
    } catch (error) {
      return new ToolMessage({
        content: `Tool error: Please check your input and try again. (${error})`,
        tool_call_id: request.toolCall.id!,
      });
    }
  },
});

const multiplyNumbers = tool(
  (input) => `Multiplication result is ${input.a * input.b}`,
  {
    name: "multiply_numbers",
    description: "Multiply two numbers provided",
    schema: z.object({
      a: z.number().describe("first number to multiply"),
      b: z.number().describe("second number to multiply"),
    }),
  }
);

const model = new ChatOpenAI({
  model: "gpt-4o",
  streaming: true, // Enable streaming
});

const agent = createAgent({
  model,
  tools: [multiplyNumbers],
  middleware: [handleToolErrors] as const,
  systemPrompt: MATHEMATICIAN_PROMPT,
});

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const langchainMessages = messages.map((msg: any) => {
    const parts = Array.isArray(msg.parts) ? msg.parts : [];
    const content =
      typeof msg.content === "string"
        ? msg.content
        : parts.map((part: any) => part?.text ?? "").join("");

    return {
      role: msg.role,
      content,
    };
  });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const sendChunk = (chunk: Record<string, unknown>) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`));
      };

      try {
        const eventStream = await agent.streamEvents(
          { messages: langchainMessages },
          { version: "v1" }
        );
        const messageId = crypto.randomUUID();
        const textPartId = `text-${messageId}`;

        sendChunk({ type: "start", messageId });
        sendChunk({ type: "start-step" });
        sendChunk({ type: "text-start", id: textPartId });

        for await (const event of eventStream) {
          const delta = extractDelta(event);
          if (!delta) continue;

          sendChunk({
            type: "text-delta",
            id: textPartId,
            delta,
          });
        }

        sendChunk({ type: "text-end", id: textPartId });
        sendChunk({ type: "finish-step" });
        sendChunk({ type: "finish" });
        
        controller.close();
      } catch (error) {
        sendChunk({
          type: "error",
          errorText:
            error instanceof Error ? error.message : "Unknown streaming error",
        });
        controller.error(error);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
      "X-Vercel-AI-Data-Stream": "v1",
    },
  });
}

function extractDelta(event: any): string {
  if (!event || typeof event !== "object") return "";
  if (event.event !== "on_chat_model_stream") return "";
  const chunk = event.data?.chunk;

  if (!chunk) return "";

  if (typeof chunk === "string") {
    return chunk;
  }

  if (typeof chunk.content === "string") {
    return chunk.content;
  }

  if (Array.isArray(chunk.content)) {
    return chunk.content
      .map((part: any) => {
        if (!part) return "";
        if (typeof part === "string") return part;
        if (part.type === "text") return part.text ?? "";
        return "";
      })
      .join("");
  }

  if (typeof chunk.text === "string") {
    return chunk.text;
  }

  return "";
}
