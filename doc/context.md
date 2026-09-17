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

As referencias de produto consultadas incluem o [Jusbrasil](https://www.jusbrasil.com.br/consulta-processual), pela busca por nome, numero ou identificador, e portais oficiais como o [TJSP](https://www.tjsp.jus.br/Processos), pela organizacao das informacoes institucionais. Essas referencias orientam os campos e o fluxo, mas a interface da LexRadar deve ter identidade propria e usar somente dados ficticios.

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
   - Decisão: exibir a lista completa da movimentação mais recente para a mais antiga, priorizando legibilidade e relevância.

4. Dados mockados
   - Ambiguidade: os campos e status devem seguir algum conjunto específico.
   - Decisão: usar um schema funcional simples e coerente, com pelo menos cinco processos fictícios, cobrindo diferentes status, tribunais, partes e tipos de movimentação, sem copiar dados reais.

5. Ordem das movimentações
   - Decisão: exibir a movimentação mais recente primeiro, pois o principal objetivo é identificar novidades rapidamente.

6. Regra de busca
   - Decisão: normalizar caixa e acentos, usar correspondência parcial e combinar os campos com lógica OR.
   - Decisão: ordenar por relevância, priorizando número exato, número parcial, parte e palavra-chave; usar a data da última movimentação como desempate.

7. Erros simulados
   - Decisão: o serviço local aceita o termo reservado `__error__` para simular erro de busca somente nos testes.
   - Decisão: uma rota com ID desconhecido representa processo inexistente; falha de serviço de detalhes é coberta por cenário simulado separado.

8. Retorno dos detalhes
   - Decisão: o botão de voltar e o botão voltar do navegador preservam termo e resultados durante a navegação.
   - Decisão: não preservar o estado após refresh, pois cache persistente está fora do MVP.

9. Validação responsiva e acessível
   - Decisão: validar a UI em 375px, 768px e 1440px.
   - Decisão: usar WCAG AA como referência, incluindo contraste mínimo de 4.5:1 para texto normal.

## Diretrizes de UI

### Direção visual

- Produto profissional, claro e orientado a consulta rápida, sem aparência de portal institucional pesado.
- Hierarquia tipográfica evidente, com o número do processo e o status como elementos de maior destaque nos resultados.
- Cores de status sem depender somente de cor: cada badge deve conter texto legível.
- Cards ou linhas de resultado compactos, com área de clique ampla e separação visual suficiente.
- Timeline vertical para movimentações, com a atualização mais recente visualmente destacada.
- Interface responsiva: em mobile, informações secundárias devem quebrar em blocos verticais sem exigir rolagem horizontal.

### Telas esperadas

1. Busca inicial: campo principal, ação de buscar, texto de orientação e exemplos de consulta.
2. Resultados: termo consultado, quantidade de resultados, lista de processos e ação de limpar.
3. Estado vazio: mensagem útil, sugestão de nova consulta e ação para limpar o termo.
4. Detalhes: retorno para resultados, resumo do processo, status, partes e timeline.
5. Carregamento: skeleton ou indicador associado ao conteúdo que será carregado.
6. Erros: mensagem clara, preservação do contexto e ações de tentar novamente ou voltar.

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
