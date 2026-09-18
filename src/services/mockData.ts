import type { LegalProcess } from '../types/process'

export const mockProcesses: LegalProcess[] = [
  {
    id: 'processo-001',
    number: '0001234-56.2025.8.26.0001',
    type: 'Ação de cobrança',
    parties: [
      { name: 'Empresa Horizonte Ltda.', role: 'Autora' },
      { name: 'Comercial Aurora S.A.', role: 'Ré' },
    ],
    court: 'Tribunal de Justiça de São Paulo',
    jurisdiction: '12ª Vara Cível da Capital',
    startDate: '2025-02-14',
    status: 'Em andamento',
    summary: 'A autora solicita o pagamento de valores referentes a um contrato comercial.',
    movements: [
      {
        id: 'mov-001-02',
        date: '2026-08-21',
        title: 'Intimação expedida',
        description: 'As partes foram intimadas para manifestação no prazo legal.',
      },
      {
        id: 'mov-001-01',
        date: '2026-07-30',
        title: 'Petição protocolada',
        description: 'Foi apresentada manifestação pela parte autora.',
      },
    ],
  },
  {
    id: 'processo-002',
    number: '1002456-81.2024.5.02.0008',
    type: 'Reclamação trabalhista',
    parties: [
      { name: 'Marina Alves', role: 'Requerente' },
      { name: 'Grupo Pioneiro S.A.', role: 'Requerida' },
    ],
    court: 'Tribunal Regional do Trabalho da 2ª Região',
    jurisdiction: '8ª Vara do Trabalho de São Paulo',
    startDate: '2024-05-09',
    status: 'Concluído',
    summary: 'A ação discute verbas rescisórias e reconhecimento de horas extras.',
    movements: [
      {
        id: 'mov-002-02',
        date: '2026-01-17',
        title: 'Sentença publicada',
        description: 'A sentença foi disponibilizada no diário da Justiça do Trabalho.',
      },
      {
        id: 'mov-002-01',
        date: '2025-12-03',
        title: 'Audiência de instrução realizada',
        description: 'Foram ouvidas as partes e as testemunhas arroladas.',
      },
    ],
  },
  {
    id: 'processo-003',
    number: '5017890-22.2023.4.03.6100',
    type: 'Ação previdenciária',
    parties: [
      { name: 'Carlos Nogueira', role: 'Requerente' },
      { name: 'Instituto Nacional de Seguridade', role: 'Requerida' },
    ],
    court: 'Tribunal Regional Federal da 3ª Região',
    jurisdiction: '5ª Vara Federal de São Paulo',
    startDate: '2023-11-02',
    status: 'Suspenso',
    summary: 'O requerente busca revisão do benefício com base em período contributivo.',
    movements: [
      {
        id: 'mov-003-02',
        date: '2026-06-11',
        title: 'Processo suspenso',
        description: 'O processo foi suspenso até a conclusão da perícia técnica.',
      },
      {
        id: 'mov-003-01',
        date: '2026-04-28',
        title: 'Perícia determinada',
        description: 'Foi determinada a realização de perícia para análise do benefício.',
      },
    ],
  },
  {
    id: 'processo-004',
    number: '0804321-19.2022.8.19.0001',
    type: 'Ação de indenização',
    parties: [
      { name: 'Paulo Mendes', role: 'Requerente' },
      { name: 'Serviços Litorâneos Ltda.', role: 'Requerida' },
    ],
    court: 'Tribunal de Justiça do Rio de Janeiro',
    jurisdiction: '4ª Vara Cível da Capital',
    startDate: '2022-08-19',
    status: 'Arquivado',
    summary: 'A ação tratou de pedido de indenização por falha na prestação de serviço.',
    movements: [
      {
        id: 'mov-004-02',
        date: '2025-10-07',
        title: 'Baixa definitiva',
        description: 'Após o encerramento da ação, os autos receberam baixa definitiva.',
      },
      {
        id: 'mov-004-01',
        date: '2025-09-22',
        title: 'Trânsito em julgado',
        description: 'A decisão transitou em julgado sem novos recursos.',
      },
    ],
  },
  {
    id: 'processo-005',
    number: '0009876-44.2026.8.13.0024',
    type: 'Ação de obrigação de fazer',
    parties: [
      { name: 'Núcleo Verde Consultoria', role: 'Autora' },
      { name: 'Município de Belo Horizonte', role: 'Interessada' },
    ],
    court: 'Tribunal de Justiça de Minas Gerais',
    jurisdiction: '2ª Vara da Fazenda Pública Municipal',
    startDate: '2026-03-18',
    status: 'Em andamento',
    summary: 'A demanda solicita análise de licença ambiental para um projeto de recuperação urbana.',
    movements: [
      {
        id: 'mov-005-01',
        date: '2026-08-04',
        title: 'Manifestação juntada',
        description: 'A parte interessada apresentou manifestação sobre a licença ambiental.',
      },
    ],
  },
]