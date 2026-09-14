import type { LegalProcess } from './types'

export const processes: LegalProcess[] = [
  {
    id: 'proc-001',
    number: '0001234-56.2024.8.26.0001',
    parties: ['Maria Silva', 'Banco do Estado S.A.', 'João Pereira'],
    court: 'Tribunal de Justiça de São Paulo',
    startDate: '2024-01-15',
    status: 'Em andamento',
    summary:
      'Ação de cobrança envolvendo contrato bancário e discussão sobre juros e parcelas.',
    movements: [
      {
        id: 'mov-1',
        date: '2024-01-15',
        title: 'Distribuição',
        description: 'Processo distribuído ao juízo da 3ª Vara Cível.',
      },
      {
        id: 'mov-2',
        date: '2024-02-03',
        title: 'Citação',
        description: 'Ré citada em audiência de conciliação.',
      },
      {
        id: 'mov-3',
        date: '2024-03-12',
        title: 'Audiência',
        description: 'Realizada audiência de conciliação sem acordo.',
      },
    ],
  },
  {
    id: 'proc-002',
    number: '0104567-89.2023.8.26.0012',
    parties: ['TechNova Ltda.', 'Pedro Santos'],
    court: 'Tribunal Regional do Trabalho da 2ª Região',
    startDate: '2023-08-10',
    status: 'Concluído',
    summary:
      'Ação trabalhista com pedidos de horas extras e indenização por danos morais.',
    movements: [
      {
        id: 'mov-4',
        date: '2023-08-10',
        title: 'Distribuição',
        description: 'Processo recebido pelo Tribunal Regional do Trabalho.',
      },
      {
        id: 'mov-5',
        date: '2023-10-18',
        title: 'Despacho',
        description: 'Julgamento de prova e oitiva de testemunhas.',
      },
      {
        id: 'mov-6',
        date: '2023-12-01',
        title: 'Sentença',
        description: 'Sentença favorável ao reclamante parcialmente.',
      },
    ],
  },
  {
    id: 'proc-003',
    number: '0234567-00.2022.8.26.7001',
    parties: ['Ana Costa', 'Estado de São Paulo'],
    court: 'Tribunal de Justiça de São Paulo',
    startDate: '2022-04-20',
    status: 'Arquivado',
    summary:
      'Mandado de segurança sobre negativa de fornecimento de documento administrativo.',
    movements: [
      {
        id: 'mov-7',
        date: '2022-04-20',
        title: 'Petição inicial',
        description: 'Mandado de segurança protocolado.',
      },
      {
        id: 'mov-8',
        date: '2022-06-08',
        title: 'Decisão',
        description: 'Pedido deferido parcialmente pelo juízo.',
      },
    ],
  },
  {
    id: 'proc-004',
    number: '4443332-11.2025.8.26.9002',
    parties: ['Luan Ferreira', 'Cia. Alfa Construções'],
    court: 'Tribunal de Justiça do Rio de Janeiro',
    startDate: '2025-02-21',
    status: 'Suspenso',
    summary:
      'Ação de execução de contrato com pedido de suspensão por mediação.',
    movements: [
      {
        id: 'mov-9',
        date: '2025-02-21',
        title: 'Distribuição',
        description: 'Processo distribuído em primeira instância.',
      },
      {
        id: 'mov-10',
        date: '2025-04-15',
        title: 'Mediação',
        description: 'Acordo encaminhado para homologação.',
      },
    ],
  },
]

export const findProcesses = (query: string) => {
  const normalized = query.trim().toLowerCase()

  if (!normalized) {
    return []
  }

  return processes.filter((process) => {
    const searchable = [
      process.number,
      process.parties.join(' '),
      process.summary,
      process.court,
      ...process.movements.flatMap((movement) => [movement.title, movement.description]),
    ]
      .join(' ')
      .toLowerCase()

    return searchable.includes(normalized)
  })
}

export const findProcessById = (id: string) =>
  processes.find((process) => process.id === id) ?? null
