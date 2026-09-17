# Contexto do protótipo

## Visão geral

O produto é um protótipo funcional de busca e acompanhamento de processos judiciais para a LexRadar, voltado a usuários que precisam localizar rapidamente um processo e entender seu status, movimentações e partes envolvidas.

## Objetivo

Criar uma interface de consulta em aproximadamente 60 minutos, com foco em:

- busca por número do processo, nome de parte ou palavra-chave;
- listagem de resultados com informações essenciais;
- visualização de detalhes do processo e movimentações;
- suporte a desktop e mobile;
- uso de dados simulados sem backend real.

## Usuário alvo

Usuário profissional que precisa verificar rapidamente o estado de um processo, sem navegar em sistemas complexos. O principal valor é velocidade, clareza e redução de atrito na consulta.

## Ambiguidades levantadas e decisões assumidas

1. Busca por tipo
   - Ambiguidade: a busca deve aceitar texto livre ou filtros separados.
   - Decisão: utilizar um único campo de busca com texto livre, para reduzir complexidade e acelerar o protótipo.

2. Resultado vazio
   - Ambiguidade: o que fazer quando não houver resultados.
   - Decisão: exibir estado vazio com mensagem clara e botão para limpar a busca.

3. Detalhes do processo
   - Ambiguidade: exibir todas as movimentações ou apenas as recentes.
   - Decisão: exibir a lista completa em ordem cronológica, priorizando legibilidade e relevância.

4. Dados mockados
   - Ambiguidade: os campos e status devem seguir algum conjunto específico.
   - Decisão: assumir um schema funcional simples e coerente, com dados reais em espírito, mas sem dependência de backend.

## MVP proposto

### Funcionalidades obrigatórias

- tela de busca com campo de texto e botão de ação;
- busca por número, parte ou palavra-chave em um único input;
- lista de resultados com número, partes, tribunal, data de início e status;
- navegação para detalhes do processo;
- página de detalhes com informações do processo e movimentações;
- estados: inicial, carregando, resultados, vazio, erro de busca e erro de detalhes;
- responsividade básica para mobile e desktop;
- testes de fluxo principal com Vitest + Testing Library.

### Fora do escopo do MVP

- autenticação/usuário logado;
- filtros avançados por data, região ou tribunal;
- edição de processos;
- paginação real em backend;
- ordenação sofisticada;
- dashboard analítica;
- exportação/PDF;
- integração com APIs reais;
- cache persistente ou sincronização offline.

## Decisões de arquitetura recomendadas

- React + TypeScript + Vite;
- React Router para navegação entre listagem e detalhes;
- CSS modular ou arquivos de estilo simples e responsivos;
- dados locais em mocks + utilitários de busca;
- testes focados em UI e fluxo de interação.

## Riscos principais

- excesso de escopo em 60 minutos;
- busca textual pouco robusta sem normalização;
- interpretação inconsistente de status e movimentações;
- UX frágil em mobile sem priorização de conteúdo.

## Alternativas consideradas

1. Filtro por tipo (número/parte/tema)
   - Prós: mais explícito.
   - Contras: exige mais interação e maior esforço no protótipo.

2. Página de detalhes com resumo compacto
   - Prós: reduz leitura.
   - Contras: menos útil para acompanhamento e avaliação de movimentações.

3. Dados reais via mock estruturado
   - Prós: maior fidelidade.
   - Contras: esforço maior e menor velocidade de entrega.

## Conclusão

O MVP deve concentrar-se em um fluxo simples, rápido e confiável: buscar, ver resultados e abrir detalhes. Qualidade de experiência e previsibilidade importam mais do que recursos adicionais.
