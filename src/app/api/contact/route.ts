import { Resend } from "resend";
import { z } from "zod";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

const BodySchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  phone: z.string().min(6).max(40).optional().or(z.literal("")),
  message: z.string().min(10).max(5000),
  ndisNumber: z.string().max(80).optional().or(z.literal("")),
  // Simple spam trap
  website: z.string().max(0).optional().or(z.literal("")),
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

  if (parsed.data.website) {
    return Response.json({ ok: true });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? SITE.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Guardian Website <onboarding@resend.dev>";

  if (!resendApiKey) {
    return Response.json(
      {
        error:
          "Email is not configured. Set RESEND_API_KEY to enable form delivery.",
      },
      { status: 501 },
    );
  }

  const resend = new Resend(resendApiKey);
  const { name, email, phone, message, ndisNumber } = parsed.data;

  const subject = `New website enquiry: ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    ndisNumber ? `NDIS #: ${ndisNumber}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  await resend.emails.send({
    from,
    to,
    subject,
    replyTo: email,
    text,
  });

  return Response.json({ ok: true });
}

