import { describe, expect, it } from 'vitest'
import { getProcessById, searchProcesses } from './processService'

describe('process service', () => {
  it('finds a process by a partial number', () => {
    const results = searchProcesses('0001234')

    expect(results).toHaveLength(1)
    expect(results[0].id).toBe('processo-001')
  })

  it('finds a process by party name without accents or case sensitivity', () => {
    const results = searchProcesses('marina alves')

    expect(results.map((process) => process.id)).toContain('processo-002')
  })

  it('finds a process by movement keyword', () => {
    const results = searchProcesses('perícia')

    expect(results.map((process) => process.id)).toContain('processo-003')
  })

  it('returns no results for an unknown query', () => {
    expect(searchProcesses('termo inexistente')).toEqual([])
  })

  it('throws the reserved simulated search error', () => {
    expect(() => searchProcesses('__error__')).toThrow('Falha simulada na busca')
  })

  it('returns a process by id and undefined for an unknown id', () => {
    expect(getProcessById('processo-004')?.status).toBe('Arquivado')
    expect(getProcessById('processo-999')).toBeUndefined()
  })

  it('orders movements from newest to oldest', () => {
    const process = getProcessById('processo-001')

    expect(process?.movements.map((movement) => movement.date)).toEqual([
      '2026-08-21',
      '2026-07-30',
    ])
  })

  it('throws the reserved simulated detail error', () => {
    expect(() => getProcessById('__detail-error__')).toThrow(
      'Falha simulada ao carregar detalhes',
    )
  })
})
