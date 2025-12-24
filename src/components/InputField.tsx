import { ChangeEvent } from 'react'

type InputFieldProps = {
  label: string
  placeholder?: string
  required?: boolean
  value: string
  onChange: (value: string) => void
  description?: string
}

const sharedClasses =
  'w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-3 text-slate-100 shadow-inner placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40'

export const InputField = ({ label, placeholder, required, value, onChange, description }: InputFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <label className="flex flex-col gap-2 text-sm text-slate-200">
      <div className="flex items-center justify-between gap-3">
        <span className="font-semibold tracking-wide">
          {label}
          {required && <span className="pl-1 text-rose-300">*</span>}
        </span>
        {description && <span className="text-xs font-normal text-slate-400">{description}</span>}
      </div>
      <input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className={sharedClasses}
      />
    </label>
  )
}
