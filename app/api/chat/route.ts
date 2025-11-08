import { MATHEMATICIAN_PROMPT } from "@/app/consts/prompts";
import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, stepCountIs, streamText, tool, UIMessage } from "ai";
import z from "zod";

export const maxDuration = 30;
export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const result = streamText({
    model: openai("gpt-4"),
    system: MATHEMATICIAN_PROMPT,
    messages: convertToModelMessages(messages),
    stopWhen: stepCountIs(20),
    tools: {
      multiplier: tool({
        description: "Multiplies two numbers together.",
        inputSchema: z.object({
          a: z.number().describe("first number to multiply"),
          b: z.number().describe("second number to multiply"),
        }),
        execute: async ({a, b}) => {
          return `The multiplication result is ${a * b}`;
        },
      }),
    },
  });

  console.log("Result:", result);

  return result.toUIMessageStreamResponse();
}
