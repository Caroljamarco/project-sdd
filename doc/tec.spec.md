# Especificação técnica

## 1. Objetivo técnico

Definir a arquitetura mínima e clara para um protótipo funcional de busca e visualização de processos, com foco em velocidade de entrega, qualidade de código e testes executáveis dentro do prazo de 60 minutos.

## 2. Stack obrigatória

- React
- TypeScript
- Vite
- React Router
- CSS
- Vitest
- Testing Library

## 3. Estrutura recomendada do projeto

```text
src/
  app/
    App.tsx
    routes.tsx
  components/
    SearchForm.tsx
    ProcessList.tsx
    ProcessCard.tsx
    ProcessDetail.tsx
    LoadingState.tsx
    EmptyState.tsx
    ErrorState.tsx
  pages/
    SearchPage.tsx
    ProcessDetailPage.tsx
  services/
    mockData.ts
    processService.ts
  hooks/
    useProcessSearch.ts
  types/
    process.ts
  styles/
    global.css
    app.css
  utils/
    normalizeText.ts
  test/
    search-flow.test.tsx
    detail-flow.test.tsx
```

## 4. Arquitetura proposta

### 4.1 Frontend

- Aplicação SPA com duas rotas principais:
  - `/` para busca e listagem;
  - `/processos/:id` para detalhes do processo.
- Componentes orientados a apresentação e responsabilidade simples.
- Estado local em componente ou hooks específicos para manter o fluxo de busca simples.

### 4.2 Dados

- Dados armazenados em arquivos mockados localmente.
- Estrutura mínima sugerida:

```ts
export type ProcessStatus = 'Em andamento' | 'Arquivado' | 'Concluído' | 'Suspenso';

export interface Movement {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface LegalProcess {
  id: string;
  number: string;
  parties: string[];
  court: string;
  startDate: string;
  status: ProcessStatus;
  summary: string;
  movements: Movement[];
}
```

### 4.3 Busca local

A lógica de busca deve:

- receber uma string de busca;
- normalizar texto (trim, lowercase, remoção de acentos quando útil);
- comparar com número, partes e palavras-chave do processo;
- retornar lista filtrada; e
- tratar ausência de resultados como estado vazio.

## 5. Fluxo de execução

### 5.1 Busca

1. Usuário digita termo.
2. App dispara busca local.
3. Estado de loading é exibido.
4. Resultados ou vazio são renderizados.
5. Em caso de falha simulada, estado de erro aparece.

### 5.2 Detalhes

1. Usuário clica em um resultado.
2. Router navega para a rota do processo.
3. Dados são carregados localmente.
4. Estado de loading é exibido.
5. Informações e movimentações são renderizadas.
6. Em caso de falha, estado de erro é exibido.

## 6. Estados da interface

Os estados devem estar previstos e implementados no componente ou hook responsável:

- initial
- loading
- results
- empty
- search-error
- detail-error

## 7. UX e acessibilidade mínima

- contraste suficiente para texto e botões;
- labels explícitas em inputs e ações;
- foco visível em itens interativos;
- layout responsivo com quebra em telas menores;
- target simples e legível para toque em mobile.

## 8. Testes

### 8.1 Cobertura recomendada

- busca por número do processo;
- busca por parte;
- busca por palavra-chave;
- estado vazio sem resultados;
- estado de erro na busca;
- carregamento e renderização de detalhes;
- navegação do resultado para detalhe.

### 8.2 Framework

- Vitest como runner de testes;
- Testing Library para renderizar e simular interação do usuário;
- testes em nível de componente para validar UI e fluxo principal.

## 9. Critérios de qualidade

- código simples e legível;
- nomes claros para componentes e funções;
- ausência de lógica complexa ou abstrações desnecessárias;
- соблюência do prazo do MVP;
- foco em comportamento observável do usuário.

## 10. Riscos técnicos

- excesso de arquitetura para um protótipo de 60 minutos;
- complexidade na busca textual sem normalização adequada;
- problemas de roteamento em mobile se o app for mal estruturado;
- testes que ficam frágeis sem simular ações reais do usuário.

## 11. Decisões alternativas avaliadas

### Alternativa A: filtros separados por tipo

Prós:

- mais explícito;
- fácil de entender para o usuário.

Contras:

- aumenta o número de controles;
- não atende ao tempo disponível com tanta eficiência.

### Alternativa B: página de detalhes mais enxuta

Prós:

- visual mais leve;
- menos conteúdo na tela.

Contras:

- reduz utilidade para acompanhamento; e
- pior para validar a qualidade da funcionalidade.

### Alternativa C: usar uma estrutura de dados muito rica

Prós:

- mais realista.

Contras:

- exige mais desenvolvimento e aumenta a chance de perder foco.

## 12. Conclusão

A arquitetura mais adequada para este desafio é uma aplicação React + TypeScript + Vite, com duas páginas e um conjunto simples de serviços mockados. O principal objetivo é garantir que o fluxo de busca, leitura de resultados e visualização de detalhes funcione com alta confiabilidade e boa experiência em pouco tempo.
