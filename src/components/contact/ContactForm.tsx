"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";

const PROJECT_TYPES = [
  "Digital Marketing",
  "Content Creation",
  "Software Development",
  "Not Sure Yet",
] as const;

type ProjectType = (typeof PROJECT_TYPES)[number];
type Status = "idle" | "sending" | "sent" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  projectType: ProjectType | "";
  message: string;
}

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  subject: "",
  projectType: "",
  message: "",
};

const INPUT_CLASS =
  "w-full rounded-card border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-teal";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);

      setStatus("sent");
      setForm(EMPTY_FORM);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Your full name"
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@example.com"
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          placeholder="What's this about?"
          className={INPUT_CLASS}
        />
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-ink">Project Type</legend>
        <div className="flex flex-wrap gap-2">
          {PROJECT_TYPES.map((type) => {
            const selected = form.projectType === type;
            return (
              <button
                key={type}
                type="button"
                aria-pressed={selected}
                onClick={() => update("projectType", selected ? "" : type)}
                className={cn(
                  "rounded-pill border px-4 py-1.5 text-sm transition-colors",
                  selected
                    ? "border-teal bg-teal font-semibold text-white"
                    : "border-line bg-white font-medium text-ink hover:border-teal",
                )}
              >
                {type}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us a bit about what you need"
          className={cn(INPUT_CLASS, "resize-none")}
        />
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-70">
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      <div role="status" aria-live="polite" className="min-h-5 text-sm">
        {status === "sent" && (
          <p className="font-medium text-teal-dark">Thanks — we'll be in touch soon.</p>
        )}
        {status === "error" && (
          <p className="font-medium text-red-600">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
