# Especificação de tasks para o build

## Objetivo

Organizar o desenvolvimento do protótipo em etapas pequenas, verificáveis e associadas a branches de trabalho. A sequência foi pensada para entregar um MVP em aproximadamente 60 minutos, com foco em funcionalidade e qualidade mínima de UX.

## Convenção de branch

Usar nomes no padrão:

- `feature/<tema>`
- `fix/<tema>`
- `chore/<tema>`

Para este projeto, sugerimos a seguinte linha de trabalho:

1. `feature/setup-vite-react`
2. `feature/mock-data-and-types`
3. `feature/search-page-ui`
4. `feature/process-detail-page`
5. `feature/testing-and-validation`
6. `feature/final-polish`

## Ordem recomendada

### Task 1 — `feature/setup-vite-react`

**Objetivo**

Inicializar a aplicação React + TypeScript com Vite, instalar dependências e preparar a estrutura base.

**Escopo**

- criar projeto Vite React TS;
- instalar dependências do projeto;
- configurar estrutura de pastas;
- adicionar base de CSS global;
- validar que a aplicação abre sem erros.

**Critérios de aceite**

- `npm install` concluído com sucesso;
- app rodando em desenvolvimento;
- build de produção executando sem erros;
- estrutura inicial pronta para receber páginas e componentes.

**Saída esperada**

Projeto base funcional com UI inicial e ambiente pronto.

**Bloqueios / riscos**

- versão de dependências incompatíveis;
- problemas de configuração de TypeScript.

---

### Task 2 — `feature/mock-data-and-types`

**Objetivo**

Definir modelos de dados e mockar os processos para alimentar a busca e os detalhes.

**Escopo**

- criar tipos para processo, partes, movimentações e status;
- montar dataset local com 5 a 10 processos;
- incluir campos: número, partes, tribunal, data, status, resumo e movimentações;
- criar utilitários de busca por texto.

**Critérios de aceite**

- dados mockados carregam localmente;
- existe função de busca por texto livre;
- estrutura de dados atende as telas de listagem e detalhe.

**Saída esperada**

Dados consistentes e serviço local pronto para uso pelas telas.

**Bloqueios / riscos**

- dataset insuficiente para validar cenários de vazio e erro;
- inconsistência de status ou campos.

---

### Task 3 — `feature/search-page-ui`

**Objetivo**

Implementar a página principal de busca e listagem de resultados.

**Escopo**

- criar tela de busca com input e botão;
- renderizar lista de resultados;
- exibir estados: inicial, carregando, sucesso e vazio;
- controlar a busca por texto;
- adicionar botão para limpar a busca;
- preparar navegação para detalhes.

**Critérios de aceite**

- usuário consegue buscar por número, parte ou palavra-chave;
- resultados aparecem corretamente;
- quando não houver resultados, exibe mensagem apropriada;
- layout responsivo para mobile e desktop.

**Saída esperada**

Página de busca funcional e consumível.

**Bloqueios / riscos**

- UX pouco clara em mobile;
- busca pouco robusta sem normalização de texto.

---

### Task 4 — `feature/process-detail-page`

**Objetivo**

Criar a visualização detalhada de cada processo e suas movimentações.

**Escopo**

- implementar rota de detalhes;
- renderizar informações do processo;
- listar movimentações com data, título e descrição;
- navegação de retorno para pesquisa;
- tratar estado de erro ao tentar carregar um processo inexistente.

**Critérios de aceite**

- o usuário consegue abrir um processo a partir do resultado;
- detalhes aparecem com as informações obrigatórias;
- estado de erro é exibido para caso inexistente ou falha simulada.

**Saída esperada**

Fluxo completo: busca → resultado → detalhe.

**Bloqueios / riscos**

- excesso de detalhes sem necessidade;
- roteamento incompleto ou layout quebrado.

---

### Task 5 — `feature/testing-and-validation`

**Objetivo**

Cobrir os principais fluxos com testes e validar a qualidade do protótipo.

**Escopo**

- escrever testes para busca por número, parte e palavra-chave;
- testar estado vazio;
- testar erro de busca e erro de detalhes;
- testar navegação para detalhes;
- rodar suite de testes.

**Critérios de aceite**

- testes passando para os fluxos principais;
- cobertura do caminho crítico de uso;
- documentação dos comportamentos em testes.

**Saída esperada**

Confiança funcional da experiência principal.

**Bloqueios / riscos**

- testes frágeis ou dependentes de implementação interna;
- uso de mocks que não representam o comportamento real.

---

### Task 6 — `feature/final-polish`

**Objetivo**

Finalizar o protótipo com refinamento visual e validação final.

**Escopo**

- ajustar responsividade e acessibilidade básica;
- revisar consistência visual;
- limpar código e nomes de componentes;
- rodar build final;
- verificar backlog de issues manuais.

**Critérios de aceite**

- layout pronto para desktop e mobile;
- visual consistente e legível;
- build de produção sem erros;
- MVP está pronto para apresentação.

**Saída esperada**

Entrega final do protótipo com qualidade adequada ao desafio.

**Bloqueios / riscos**

- refinamento visual consumindo tempo do esforço principal;
- ocultar bugs reais em troca de estética.

---

## Mapa de dependências

```text
feature/setup-vite-react
  ↓
feature/mock-data-and-types
  ↓
feature/search-page-ui
  ↓
feature/process-detail-page
  ↓
feature/testing-and-validation
  ↓
feature/final-polish
```

## Critérios globais de entrega

- cada task deve ser concluída em branch separada;
- uma task só deve avançar quando a anterior estiver validada;
- todo commit deve refletir o objetivo da branch;
- qualquer atraso ou risco deve ser registrado antes de seguir para a próxima etapa.

## Recomendação de execução real

Se o objetivo for cumprir em 60 minutos, usar a seguinte linha de priorização:

- Must have: task 1, 2, 3, 4
- Should have: task 5
- Could have: task 6, apenas se o tempo permitir

## Observação final

A estratégia de task por branch reduz risco de conflitar código e mantém o progresso rastreável. Para o desafio técnico, esse modelo é suficiente para acelerar a entrega sem perder controle do escopo.
