import { mockProcesses } from './mockData'
import { normalizeText } from '../utils/normalizeText'
import type { LegalProcess } from '../types/process'

const errorSearchTerm = '__error__'
const detailErrorId = '__detail-error__'

function getLastMovement(process: LegalProcess): string {
  return [...process.movements].sort((first, second) => second.date.localeCompare(first.date))[0]?.date ?? ''
}

function getSearchFields(process: LegalProcess): string[] {
  return [
    process.number,
    process.type,
    process.summary,
    process.court,
    process.jurisdiction,
    ...process.parties.flatMap((party) => [party.name, party.role]),
    ...process.movements.flatMap((movement) => [movement.title, movement.description]),
  ].map(normalizeText)
}

function getRelevance(process: LegalProcess, query: string): number {
  const normalizedNumber = normalizeText(process.number)
  const normalizedParties = process.parties.map((party) => normalizeText(party.name))
  const normalizedFields = getSearchFields(process)

  if (normalizedNumber === query) return 4
  if (normalizedNumber.includes(query)) return 3
  if (normalizedParties.some((party) => party.includes(query))) return 2
  if (normalizedFields.some((field) => field.includes(query))) return 1
  return 0
}

export function searchProcesses(query: string): LegalProcess[] {
  const normalizedQuery = normalizeText(query)

  if (normalizedQuery === errorSearchTerm) {
    throw new Error('Falha simulada na busca')
  }

  if (!normalizedQuery) return []

  return mockProcesses
    .filter((process) => getSearchFields(process).some((field) => field.includes(normalizedQuery)))
    .sort((first, second) => {
      const relevanceDifference = getRelevance(second, normalizedQuery) - getRelevance(first, normalizedQuery)
      if (relevanceDifference !== 0) return relevanceDifference
      return getLastMovement(second).localeCompare(getLastMovement(first))
    })
}

export function getProcessById(id: string): LegalProcess | undefined {
  if (id === detailErrorId) {
    throw new Error('Falha simulada ao carregar detalhes')
  }

  const process = mockProcesses.find((item) => item.id === id)
  if (!process) return undefined

  return {
    ...process,
    movements: [...process.movements].sort((first, second) => second.date.localeCompare(first.date)),
  }
}