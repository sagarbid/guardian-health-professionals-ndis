"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

type FormState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "sent" }
  | { status: "error"; message: string };

export default function ContactCtaForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    ndisNumber: "",
    message: "",
    website: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState({ status: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const json = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(json?.error ?? "Unable to send. Please try again.");
      }
      setState({ status: "sent" });
      setValues({
        name: "",
        email: "",
        phone: "",
        ndisNumber: "",
        message: "",
        website: "",
      });
    } catch (err: unknown) {
      setState({
        status: "error",
        message: err instanceof Error ? err.message : "Something went wrong.",
      });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      aria-label="Contact form"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="block text-sm font-semibold text-slate-900">
            Name
            <input
              required
              value={values.name}
              onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              autoComplete="name"
            />
          </label>
        </div>
        <div className="sm:col-span-1">
          <label className="block text-sm font-semibold text-slate-900">
            Email
            <input
              required
              type="email"
              value={values.email}
              onChange={(e) =>
                setValues((v) => ({ ...v, email: e.target.value }))
              }
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              autoComplete="email"
            />
          </label>
        </div>

        <div className="sm:col-span-1">
          <label className="block text-sm font-semibold text-slate-900">
            Phone (optional)
            <input
              value={values.phone}
              onChange={(e) =>
                setValues((v) => ({ ...v, phone: e.target.value }))
              }
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              autoComplete="tel"
            />
          </label>
        </div>

        <div className="sm:col-span-1">
          <label className="block text-sm font-semibold text-slate-900">
            NDIS # (optional)
            <input
              value={values.ndisNumber}
              onChange={(e) =>
                setValues((v) => ({ ...v, ndisNumber: e.target.value }))
              }
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </label>
        </div>

        <div className="hidden">
          <label className="block text-sm font-semibold text-slate-900">
            Website
            <input
              value={values.website}
              onChange={(e) =>
                setValues((v) => ({ ...v, website: e.target.value }))
              }
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold text-slate-900">
            How can we help?
            <textarea
              required
              rows={4}
              value={values.message}
              onChange={(e) =>
                setValues((v) => ({ ...v, message: e.target.value }))
              }
              className="mt-1 w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Tell us a little about your goals and what support you’re looking for."
            />
          </label>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state.status === "sending"}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {state.status === "sending" ? "Sending…" : "Request a callback"}
        </button>
        <div className="text-xs text-slate-600">
          Prefer to call?{" "}
          <a
            className="font-semibold text-slate-900 underline underline-offset-4"
            href={`tel:${SITE.phone.replaceAll(" ", "")}`}
          >
            {SITE.phone}
          </a>
        </div>
      </div>

      {state.status === "sent" ? (
        <p className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-900">
          Thanks — we’ve received your message and will be in touch.
        </p>
      ) : null}
      {state.status === "error" ? (
        <p className="mt-3 rounded-lg bg-rose-50 p-3 text-sm font-semibold text-rose-900">
          {state.message}
        </p>
      ) : null}

      <p className="mt-3 text-xs text-slate-600">
        This form is for general enquiries only. If there is an emergency,
        call 000.
      </p>
    </form>
  );
}
