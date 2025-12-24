import { ChangeEvent } from 'react'

type TextAreaFieldProps = {
  label: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  rows?: number
  description?: string
}

const sharedClasses =
  'min-h-[120px] w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-3 text-slate-100 shadow-inner placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40'

export const TextAreaField = ({ label, placeholder, value, onChange, rows = 4, description }: TextAreaFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <label className="flex flex-col gap-2 text-sm text-slate-200">
      <div className="flex items-center justify-between gap-3">
        <span className="font-semibold tracking-wide">{label}</span>
        {description && <span className="text-xs font-normal text-slate-400">{description}</span>}
      </div>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        className={sharedClasses}
      />
    </label>
  )
}
