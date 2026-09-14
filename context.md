Você é um engenheiro de software sênior especializado em React e TypeScript.

 Quero construir um protótipo funcional para um desafio técnico da Jusbrasil, com aproximadamente **60 minutos de implementação**.

### Contexto

A lexradar quer melhorar a consulta e acompanhamento de processos judiciais. O usuário precisa conseguir encontrar rapidamente um processo e visualizar suas principais informações e movimentações.
>
> ### Requisitos funcionais
>
> 1. Criar uma tela de busca de processos.
> 2. Permitir busca por:
>
>    * número do processo;
>    * nome de uma das partes;
>    * palavra-chave.
> 3. Exibir os resultados contendo:
>
>    * número do processo;
>    * partes;
>    * tribunal;
>    * data de início;
>    * status atual.
> 4. Permitir acessar os detalhes de um processo.
> 5. Na tela de detalhes, exibir:
>
>    * informações do processo;
>    * lista de movimentações;
>    * data;
>    * título;
>    * descrição.
> 6. Implementar os estados:
>
>    * estado inicial;
>    * loading;
>    * resultados;
>    * nenhum resultado;
>    * erro na busca;
>    * erro ao carregar detalhes.
> 7. A aplicação deve funcionar em desktop e mobile.
>
> ### Requisitos técnicos
>
> * React
> * TypeScript
> * Vite framework react
> * React Router - paginacao da telas
> * CSS
> * Vitest - para testes
> * Testing Library - para teste de component react
> * Dados mockados/localmente, sem necessidade de backend real. -
>
> ### Restrições
>
> * O desafio deve ser desenvolvido em aproximadamente **60 minutos**.
> * Priorizar funcionalidade e qualidade em vez de complexidade.
> * Não criar funcionalidades que não sejam necessárias para o MVP.
> * Utilizar boas práticas de React e TypeScript.
> * Garantir acessibilidade básica e responsividade.
> * Criar testes para os principais fluxos.
>
> ### Antes de implementar 12
>
> Primeiro analise o problema e proponha:
>
> 1. possíveis ambiguidades;
> 2. decisões necessárias;
> 3. escopo mínimo do MVP;
> 4. estrutura técnica recomendada.
>
> Depois crie uma especificação funcional e técnica objetiva.
context.md
funcional.spec.md
tecnico.spec.md
>
> **Não implemente funcionalidades desnecessárias apenas para deixar o projeto mais sofisticado.**
>
> Durante a implementação, priorize:
>
> **Must have → Should have → Could have**
>
> Ao final, valide:
>
> * fluxo completo de busca;
> * visualização dos resultados;
> * abertura dos detalhes;
> * estados de loading/erro/vazio;
> * responsividade;
> * testes;
> * build de produção.