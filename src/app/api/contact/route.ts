import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

const asTrimmedString = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

const fail = (error: string, status: number) =>
  NextResponse.json({ ok: false, error }, { status });

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return fail("Invalid request body.", 400);
  }

  if (typeof raw !== "object" || raw === null) {
    return fail("Invalid request body.", 400);
  }

  const body = raw as Record<string, unknown>;
  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const subject = asTrimmedString(body.subject);
  const projectType = asTrimmedString(body.projectType);
  const message = asTrimmedString(body.message);

  if (!name || !email || !message) {
    return fail("Name, email, and message are required.", 422);
  }
  if (!EMAIL_PATTERN.test(email)) {
    return fail("Please provide a valid email address.", 422);
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return fail(`Message must be under ${MAX_MESSAGE_LENGTH} characters.`, 422);
  }

  // TODO: send via an email provider (Resend, SendGrid...) or push to a CRM.
  console.log("New contact form submission:", { name, email, subject, projectType, message });

  return NextResponse.json({ ok: true });
}
