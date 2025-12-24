import { useMemo } from 'react'

type OutputPanelProps = {
  prompt: string
  onCopy: () => void
  copied: boolean
}

export const OutputPanel = ({ prompt, onCopy, copied }: OutputPanelProps) => {
  const copyLabel = useMemo(() => (copied ? 'Copied' : 'Copy'), [copied])

  return (
    <section className="mt-10 space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">Output</p>
          <h2 className="text-lg font-semibold text-slate-50">Final prompt</h2>
        </div>
        <button
          type="button"
          onClick={onCopy}
          disabled={!prompt}
          className="inline-flex items-center gap-2 rounded-lg border border-sky-500/50 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/20 disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-800 disabled:text-slate-400"
        >
          {copyLabel}
        </button>
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
        {prompt ? (
          <pre
            className="max-h-96 overflow-auto whitespace-pre-wrap text-sm leading-relaxed text-slate-50"
            role="textbox"
          >
            {prompt}
          </pre>
        ) : (
          <p className="text-sm text-slate-400">Generate a prompt to see it here.</p>
        )}
      </div>
    </section>
  )
}
