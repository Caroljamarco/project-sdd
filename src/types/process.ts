export type ProcessStatus = 'Em andamento' | 'Arquivado' | 'Concluído' | 'Suspenso'

export type PartyRole =
  | 'Autora'
  | 'Ré'
  | 'Requerente'
  | 'Requerida'
  | 'Interessada'

export interface Movement {
  id: string
  date: string
  title: string
  description: string
}

export interface Party {
  name: string
  role: PartyRole
}

export interface LegalProcess {
  id: string
  number: string
  type: string
  parties: Party[]
  court: string
  jurisdiction: string
  startDate: string
  status: ProcessStatus
  summary: string
  movements: Movement[]
}