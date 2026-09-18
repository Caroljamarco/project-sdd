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

export interface Party {
  name: string;
  role: 'Autora' | 'Ré' | 'Requerente' | 'Requerida' | 'Interessada';
}

export interface LegalProcess {
  id: string;
  number: string;
  type: string;
  parties: Party[];
  court: string;
  jurisdiction: string;
  startDate: string;
  status: ProcessStatus;
  summary: string;
  movements: Movement[];
}
```

Os papéis das partes devem aceitar, no mínimo, `Autora`, `Ré`, `Requerente`, `Requerida` e `Interessada`. O serviço deve armazenar datas no formato ISO `YYYY-MM-DD` e a UI deve formatá-las para o padrão brasileiro.

### 4.3 Busca local

A lógica de busca deve:

- receber uma string de busca;
- normalizar texto (trim, lowercase, remoção de acentos quando útil);
- comparar com número, nomes e papéis das partes, tipo, resumo, título e descrição das movimentações;
- usar correspondência parcial e lógica OR entre os campos;
- ordenar por relevância, priorizando número exato, número parcial, parte e palavra-chave;
- usar a data da última movimentação como desempate;
- retornar lista filtrada; e
- tratar ausência de resultados como estado vazio.

Os mocks devem conter pelo menos cinco processos fictícios, incluindo casos em andamento, concluídos, suspensos e arquivados. Os dados devem variar em tribunal, tipo de ação, partes e quantidade de movimentações para que a UI não seja validada apenas com um caso feliz.

## 5. Fluxo de execução

### 5.1 Busca

1. Usuário digita termo.
2. App dispara busca local.
3. Estado de loading é exibido.
4. Resultados ou vazio são renderizados.
5. Em caso de falha simulada, estado de erro aparece.
6. O termo e os resultados podem ser preservados ao navegar para os detalhes e voltar.

O serviço local deve aceitar o termo reservado `__error__` para simular erro de busca nos testes. A busca por ID inexistente deve produzir erro de recurso não encontrado; a falha simulada de detalhes deve ser um cenário separado no serviço.

### 5.2 Detalhes

1. Usuário clica em um resultado.
2. Router navega para a rota do processo.
3. Dados são carregados localmente.
4. Estado de loading é exibido.
5. Informações e movimentações são renderizadas.
6. Em caso de falha, estado de erro é exibido.

## 6. Requisitos de UI

### Busca

- O campo deve ter label acessível, placeholder orientativo e suporte a `Enter`.
- O botão de busca deve ter estado desabilitado ou protegido durante o loading.
- A tela inicial não deve exibir resultados antes de uma busca.

### Resultados

- Cada item deve ser um elemento interativo com foco visível e área de toque adequada.
- O item deve priorizar número, status, partes e última atualização.
- O layout deve se adaptar sem rolagem horizontal em viewport mobile.

### Detalhes

- O cabeçalho deve conter voltar, número do processo e status.
- Metadados devem ser agrupados em uma área de resumo.
- Movimentações devem usar timeline vertical e ser ordenadas da mais recente para a mais antiga.

### Estados

- `initial`: orientação para busca e exemplos de consulta.
- `loading`: skeleton ou indicador próximo ao conteúdo afetado.
- `results`: contagem, termo consultado e lista.
- `empty`: mensagem, orientação e limpar busca.
- `search-error`: erro, tentar novamente e termo preservado.
- `detail-error`: erro, voltar e tentar novamente.

### Acessibilidade e responsividade

- labels e mensagens devem ser associadas aos controles;
- foco deve permanecer visível em teclado;
- mensagens de loading e erro devem usar uma região anunciável quando apropriado;
- contraste não deve ser a única forma de comunicar status;
- contraste de texto normal deve atender no mínimo 4.5:1, seguindo WCAG AA;
- conteúdo deve funcionar em desktop e mobile sem sobreposição ou corte.

Breakpoints mínimos de validação visual: 375px, 768px e 1440px. O contexto da busca deve ser preservado somente durante a navegação, sem persistência após refresh.

## 7. Estados da interface

Os estados devem estar previstos e implementados no componente ou hook responsável:

- initial
- loading
- results
- empty
- search-error
- detail-error

## 8. UX e acessibilidade mínima

- contraste suficiente para texto e botões;
- labels explícitas em inputs e ações;
- foco visível em itens interativos;
- layout responsivo com quebra em telas menores;
- target simples e legível para toque em mobile.

## 9. Testes

### 8.1 Cobertura recomendada

- busca por número do processo;
- busca por parte;
- busca por palavra-chave;
- estado vazio sem resultados;
- estado de erro na busca;
- carregamento e renderização de detalhes;
- navegação do resultado para detalhe.
- busca em título e descrição de movimentação;
- preservação do contexto ao voltar;
- estados visuais principais em desktop e mobile.

### 8.2 Framework

- Vitest como runner de testes;
- Testing Library para renderizar e simular interação do usuário;
- testes em nível de componente para validar UI e fluxo principal.

## 10. Critérios de qualidade

- código simples e legível;
- nomes claros para componentes e funções;
- ausência de lógica complexa ou abstrações desnecessárias;
- observância do prazo do MVP;
- foco em comportamento observável do usuário.

## 11. Riscos técnicos

- excesso de arquitetura para um protótipo de 60 minutos;
- complexidade na busca textual sem normalização adequada;
- problemas de roteamento em mobile se o app for mal estruturado;
- testes que ficam frágeis sem simular ações reais do usuário.

## 12. Decisões alternativas avaliadas

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

## 13. Conclusão

A arquitetura mais adequada para este desafio é uma aplicação React + TypeScript + Vite, com duas páginas e um conjunto simples de serviços mockados. O principal objetivo é garantir que o fluxo de busca, leitura de resultados e visualização de detalhes funcione com alta confiabilidade e boa experiência em pouco tempo.
