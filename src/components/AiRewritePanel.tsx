"use client";

import { useMemo, useState } from "react";

type Tone = "empathetic" | "professional" | "plain-language";

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "done"; text: string }
  | { status: "error"; message: string };

export default function AiRewritePanel({
  serviceTitle,
  defaultText,
}: {
  serviceTitle: string;
  defaultText: string;
}) {
  const [audience, setAudience] = useState("Allied health (OT / physio)");
  const [tone, setTone] = useState<Tone>("empathetic");
  const [input, setInput] = useState(defaultText);
  const [state, setState] = useState<State>({ status: "idle" });

  const canRun = useMemo(() => input.trim().length >= 10, [input]);

  async function run() {
    if (!canRun) return;
    setState({ status: "loading" });
    try {
      const res = await fetch("/api/ai/rewrite", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          service: serviceTitle,
          audience,
          tone,
          input,
        }),
      });
      const json = (await res.json().catch(() => null)) as
        | { text?: string; error?: string }
        | null;
      if (!res.ok) {
        throw new Error(json?.error ?? "AI rewrite failed.");
      }
      setState({ status: "done", text: json?.text ?? "" });
    } catch (err: unknown) {
      setState({
        status: "error",
        message: err instanceof Error ? err.message : "AI rewrite failed.",
      });
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-extrabold text-slate-900">
        AI copy assistant
      </div>
      <p className="mt-1 text-sm text-slate-700">
        Regenerate this section using OpenAI. Configure `OPENAI_API_KEY` to
        enable.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-900">
          Audience
          <input
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </label>
        <label className="block text-sm font-semibold text-slate-900">
          Tone
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value as Tone)}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="empathetic">Empathetic</option>
            <option value="professional">Professional</option>
            <option value="plain-language">Plain language</option>
          </select>
        </label>
      </div>

      <label className="mt-3 block text-sm font-semibold text-slate-900">
        Source text
        <textarea
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mt-1 w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </label>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={run}
          disabled={!canRun || state.status === "loading"}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {state.status === "loading" ? "Generating…" : "Rewrite section"}
        </button>
        <div className="text-xs text-slate-600">
          Output stays in your browser until you copy it into MDX.
        </div>
      </div>

      {state.status === "done" ? (
        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <div className="text-xs font-bold uppercase tracking-wide text-emerald-800">
            Suggested rewrite
          </div>
          <div className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-emerald-950">
            {state.text}
          </div>
        </div>
      ) : null}

      {state.status === "error" ? (
        <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm font-semibold text-rose-900">
          {state.message}
        </div>
      ) : null}
    </div>
  );
}
