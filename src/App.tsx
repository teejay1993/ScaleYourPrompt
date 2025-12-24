import { FormEvent, useMemo, useState } from 'react'
import { InputField } from './components/InputField'
import { OutputPanel } from './components/OutputPanel'
import { TextAreaField } from './components/TextAreaField'
import { buildPrompt, PromptFields } from './lib/buildPrompt'

const initialFields: PromptFields = {
  role: '',
  task: '',
  content: '',
  reasoning: '',
  outputFormat: '',
  stopCondition: '',
}

function App() {
  const [fields, setFields] = useState<PromptFields>(initialFields)
  const [prompt, setPrompt] = useState('')
  const [copied, setCopied] = useState(false)

  const isValid = useMemo(() => fields.role.trim().length > 0 && fields.task.trim().length > 0, [fields.role, fields.task])

  const updateField = (key: keyof PromptFields) => (value: string) => {
    setFields((previous) => ({ ...previous, [key]: value }))
  }

  const handleGenerate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isValid) return

    const formatted = buildPrompt(fields)
    setPrompt(formatted)
    setCopied(false)
  }

  const handleCopy = async () => {
    if (!prompt) return

    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1000)
  }

  return (
    <div className="min-h-screen bg-midnight px-4 py-12 text-slate-50">
      <main className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">Prompt builder</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Scale your prompt</h1>
          <p className="max-w-3xl text-base text-slate-300">
            Enter your role and task, add any supporting context, then generate a clean, structured prompt ready for your AI
            workflows.
          </p>
        </header>

        <form onSubmit={handleGenerate} className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-card">
          <div className="grid gap-5 md:grid-cols-2">
            <InputField
              label="Role"
              placeholder="e.g., Senior Technical Writer"
              required
              value={fields.role}
              onChange={updateField('role')}
              description="Required"
            />
            <InputField
              label="Task"
              placeholder="e.g., Summarize the latest release notes"
              required
              value={fields.task}
              onChange={updateField('task')}
              description="Required"
            />
          </div>

          <TextAreaField
            label="Content"
            placeholder="Add any context or source material for the model."
            value={fields.content ?? ''}
            onChange={updateField('content')}
            rows={4}
          />

          <div className="grid gap-5 md:grid-cols-2">
            <TextAreaField
              label="Reasoning"
              placeholder="Describe how the model should think before responding."
              value={fields.reasoning ?? ''}
              onChange={updateField('reasoning')}
              rows={3}
            />
            <TextAreaField
              label="Output format"
              placeholder="Outline the response structure, bullet points, JSON, tables, etc."
              value={fields.outputFormat ?? ''}
              onChange={updateField('outputFormat')}
              rows={3}
            />
          </div>

          <TextAreaField
            label="Stop condition"
            placeholder="Specify when the assistant should stop (e.g., after a summary or when data ends)."
            value={fields.stopCondition ?? ''}
            onChange={updateField('stopCondition')}
            rows={2}
          />

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={!isValid}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-slate-700"
            >
              Generate prompt
            </button>
            <p className="text-sm text-slate-300">
              {isValid ? 'Ready to generate a structured prompt.' : 'Role and Task are required before generating.'}
            </p>
          </div>
        </form>

        <OutputPanel prompt={prompt} onCopy={handleCopy} copied={copied} />
      </main>
    </div>
  )
}

export default App
