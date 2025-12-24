export type PromptFields = {
  role: string
  task: string
  content?: string
  reasoning?: string
  outputFormat?: string
  stopCondition?: string
}

const hasValue = (value?: string) => Boolean(value && value.trim().length > 0)

const normalize = (value?: string) => (value ? value.trim() : '')

export const buildPrompt = ({ role, task, content, reasoning, outputFormat, stopCondition }: PromptFields) => {
  const lines = [`You are: ${normalize(role)}`, '', 'Task:', normalize(task)]

  if (hasValue(content)) {
    lines.push('', 'Context:', normalize(content))
  }

  if (hasValue(reasoning)) {
    lines.push('', 'Reasoning:', normalize(reasoning))
  }

  if (hasValue(outputFormat)) {
    lines.push('', 'Output format:', normalize(outputFormat))
  }

  if (hasValue(stopCondition)) {
    lines.push('', 'Stop condition:', normalize(stopCondition))
  }

  lines.push(
    '',
    'Rules:',
    '- Follow the output format exactly.',
    '- If information is missing, ask only the minimum necessary questions.',
  )

  return lines.join('\n')
}
