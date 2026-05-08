import { z } from "zod";
import { getOpenAIClient } from "@/lib/openai";

export const runtime = "nodejs";

const BodySchema = z.object({
  service: z.string().min(2).max(120),
  audience: z
    .string()
    .min(2)
    .max(120)
    .default("NDIS participants and families in Melbourne, Victoria"),
  tone: z
    .enum(["empathetic", "professional", "plain-language"])
    .default("empathetic"),
  input: z.string().min(10).max(4000),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    return Response.json(
      { error: "Invalid request", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const client = getOpenAIClient();
  if (!client) {
    return Response.json(
      {
        error:
          "OpenAI is not configured. Set OPENAI_API_KEY to enable AI rewriting.",
      },
      { status: 501 },
    );
  }

  const { service, audience, tone, input } = parsed.data;
  const prompt = `You are writing for an Australian NDIS-registered disability support provider website.

Task: Rewrite the provided website copy about "${service}" for the audience "${audience}".

Tone: ${tone}. Requirements:
- Be accurate and non-medical (avoid diagnosis and promises).
- Use plain English and be culturally respectful.
- Keep Australian spelling (e.g., organisation, centre).
- Keep it concise and web-friendly (short paragraphs, optional bullet points).
- Mention "NDIS-funded" where appropriate (do not include prices).

Copy to rewrite:
${input}`;

  const model = process.env.OPENAI_TEXT_MODEL ?? "gpt-4.1-mini";

  const completion = await client.responses.create({
    model,
    input: prompt,
  });

  const text = completion.output_text?.trim();
  if (!text) {
    return Response.json(
      { error: "No output returned from OpenAI." },
      { status: 502 },
    );
  }

  return Response.json({ text });
}

