export type ProcessStatus = 'Em andamento' | 'Arquivado' | 'Concluído' | 'Suspenso'

export interface Movement {
  id: string
  date: string
  title: string
  description: string
}

export interface LegalProcess {
  id: string
  number: string
  parties: string[]
  court: string
  startDate: string
  status: ProcessStatus
  summary: string
  movements: Movement[]
}
