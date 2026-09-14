# Especificação funcional

## 1. Visão geral

Este documento detalha o escopo funcional do MVP para a busca e acompanhamento de processos judiciais. O objetivo é prover uma interface funcional, simples e responsiva, que permita localizar processos rapidamente e consultar suas movimentações.

## 2. Objetivo do produto

Permitir que o usuário:

- encontre processos por número, nome de parte ou palavra-chave;
- compreenda rapidamente o status do processo;
- acesse os detalhes do processo e sua linha do tempo de movimentações;
- use a aplicação em desktop e mobile sem perda de funcionalidade.

## 3. Usuário principal

Profissional que precisa acompanhar processos de forma ágil, com foco em praticidade e leitura rápida.

## 4. Requisitos funcionais

### 4.1 Tela de busca

A aplicação deve iniciar em uma tela de busca com:

- campo de texto principal para busca;
- botão de busca;
- botão de limpar/limpar filtros;
- estado visual de carregamento durante a busca;
- instrução textual de busca sugerida (ex.: número do processo, nome de parte ou termo-chave).

#### Critério de aceite

- Ao abrir a tela, o usuário vê o campo de busca e a estrutura inicial da página.
- Ao digitar texto e enviar, a aplicação inicia a busca.
- O botão limpar remove a busca atual e retorna ao estado inicial.

### 4.2 Busca por texto livre

O sistema deve permitir busca em qualquer um dos campos abaixo usando um único input:

- número do processo;
- nome de uma das partes;
- palavra-chave ou termo presente na movimentação/título.

#### Critério de aceite

- Digitar um número parcial ou completo retorna processos compatíveis.
- Digitar nome de parte retorna processos que envolvem essa pessoa/empresa.
- Digitar palavra-chave retorna processos cujo conteúdo ou movimentações a contenham.

### 4.3 Resultados

A listagem deve exibir, para cada processo encontrado:

- número do processo;
- partes envolvidas;
- tribunal;
- data de início;
- status atual.

Cada item da lista deve ser clicável e levar o usuário à tela de detalhes.

#### Critério de aceite

- A lista apresenta ao menos os dados obrigatórios.
- O usuário pode abrir um processo clicando no card/linha do resultado.
- O layout permanece legível em mobile e desktop.

### 4.4 Tela de detalhes

Ao abrir um processo, a aplicação deve apresentar:

- número do processo;
- tribunal;
- partes;
- data de início;
- status atual;
- descrição geral do caso;
- lista de movimentações do processo em ordem cronológica.

Cada movimentação deve conter:

- data;
- título;
- descrição.

#### Critério de aceite

- O usuário consegue visualizar o processo completo em uma página dedicada.
- A lista de movimentações mostra data, título e descrição.
- O processo pode ser retornado à busca sem perder contexto.

## 5. Estados da aplicação

### 5.1 Estado inicial

Quando a aplicação abre, mostra a tela de busca vazia, pronta para uso.

### 5.2 Carregando

Durante a busca ou carregamento de detalhes, mostrar indicador de progresso.

### 5.3 Resultados

Quando há processos correspondentes, mostrar a listagem com dados resumidos.

### 5.4 Nenhum resultado

Quando a busca não retorna dados, mostrar mensagem clara e ação de limpar busca.

### 5.5 Erro na busca

Quando ocorre falha na busca, mostrar mensagem e permitir tentar novamente.

### 5.6 Erro ao carregar detalhes

Quando o processo não pode ser carregado, mostrar erro e possibilidade de voltar.

## 6. Regras de negócio

- A busca deve operar localmente, sem backend.
- A interface deve priorizar velocidade e clareza visual.
- O fluxo principal deve ser acessível em keyboard e com contraste simples.
- A navegação entre busca e detalhes deve ser direta e sem dependência de autenticação.

## 7. MVP, fora do escopo e prioridade

### Must have

- busca por texto livre;
- listagem de resultados;
- detalhes do processo;
- estados principais;
- responsividade.

### Should have

- botão de limpar busca;
- feedback visual de carregamento;
- ordenação por relevância ou data;
- usabilidade acessível básica.

### Could have

- filtros visuais adicionais;
- destaque para status críticos;
- agrupamento por tribunal;
- melhorias de animação.

## 8. Critérios de aceite do MVP

1. O usuário consegue abrir a aplicação e visualizar a tela de busca.
2. A busca por número, parte ou palavra-chave retorna dados relevantes.
3. A listagem mostra campos essenciais do processo.
4. O usuário consegue navegar para os detalhes de um processo.
5. A tela de detalhes apresenta informações e movimentações.
6. Estados vazios e de erro são exibidos corretamente.
7. A aplicação funciona em desktop e mobile.
8. Os testes cobrem os fluxos de busca principal e detecção de erro.

## 9. Riscos e limitações

- Sem backend real, a busca será simulada localmente.
- O volume de dados é pequeno, então lógica de paginação ou ordenação complexa não é necessária.
- O protótipo deve evitar sobre engenharia para atender ao prazo de 60 minutos.

## 10. Decisões assumidas

- Uso de um único campo de busca em vez de filtros múltiplos.
- Exibição da lista completa de movimentações em detalhes.
- Dados mockados estruturados de forma simples, porém credível.
