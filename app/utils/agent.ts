import { openai } from "@ai-sdk/openai";
import { ToolLoopAgent } from "ai";

const myAgent = new ToolLoopAgent({
    model: openai('gpt-4.1'),
    instructions: 'You are my personal assistant. Answer as concisely as possible basing on my resume.',
    tools: {}
});