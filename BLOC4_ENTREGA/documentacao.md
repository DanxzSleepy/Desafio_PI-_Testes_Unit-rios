# Desafio PI: Testes Unitários, Módulos e Qualidade

## 🎯 BLOC 1: AÇÃO - Identificação e Isolamento do Módulo

### Tarefa 1.1: Escolha do Componente Crítico

**Nome da Função Escolhida:** `validarCPF(cpf)`

**Entrada Esperada:** String contendo um CPF no formato "12345678900" ou "123.456.789-00"

**Saída Esperada:** Booleano (true para CPF válido, false para CPF inválido)

**Justificativa:** A função de validação de CPF é crítica para o sistema de cadastro de usuários, pois garante que os documentos armazenados sejam válidos e possam ser utilizados em processos legais e financeiros.

### Tarefa 1.2: Criação do Ambiente de Teste

O ambiente de teste foi criado na pasta `Desafio` com os seguintes arquivos:

1. `modulo_pi.js` - Contém a função [validarCPF](file:///c:/Users/Danilo54279466/Documents/GitHub/Repositorios_Testes/Desafio/modulo_pi.js#L11-L60) isolada
2. `runner_unitario.html` - Interface para execução dos testes no navegador
3. `casos_teste.js` - Conjunto completo de casos de teste unitários

## 🧐 BLOC 2: REFLEXÃO - Aplicação das Técnicas de Caixa Preta

### Tarefa 2.1: Particionamento de Equivalência (PE)

| Partição | Descrição da Partição | Exemplo de Teste | Resultado Esperado |
|----------|----------------------|------------------|-------------------|
| P1 | VÁLIDA (CPF com dígitos verificadores corretos) | "123.456.789-09" | TRUE |
| P2 | INVÁLIDA (Tipo errado de dado) | 12345678909 (número) | FALSE |
| P3 | INVÁLIDA (Regra de negócio - dígitos repetidos) | "111.111.111-11" | FALSE |
| P4 | INVÁLIDA (Null/Vazio) | "" | FALSE |

### Tarefa 2.2: Análise de Valor Limite (AVL)

Para a função validarCPF, o limite principal é o número de dígitos (11 dígitos):

| Ponto de Teste | Valor | Resultado Esperado | Objetivo do Teste |
|----------------|-------|-------------------|-------------------|
| AVL-1: Abaixo do Mínimo (-1) | 10 dígitos | INVÁLIDO | Verifica se a regra de exatamente 11 dígitos foi implementada |
| AVL-2: Mínimo (No Limite) | 11 dígitos | VÁLIDO | Verifica se o número mínimo permitido funciona |
| AVL-3: Acima do Mínimo (+1) | 12 dígitos | INVÁLIDO | Verifica se a regra de exatamente 11 dígitos foi implementada |

## 🚀 BLOC 3: NOVA AÇÃO - Execução e Documentação

### Tarefa 3.1: Criação dos Casos de Teste Unitário (CTU)

| CTU ID | Teste Baseado em | Passos para Executar (Chamada de Função) | Resultado Esperado | Resultado OBTIDO | STATUS |
|--------|------------------|-----------------------------------------|--------------------|------------------|--------|
| CTU-001 | P1 (Válido) | `validarCPF("123.456.789-09")` | TRUE | TRUE | PASS |
| CTU-002 | P1 (Válido) | `validarCPF("12345678909")` | TRUE | TRUE | PASS |
| CTU-003 | P2 (Inválida - Tipo Errado) | `validarCPF(12345678909)` | FALSE | FALSE | PASS |
| CTU-004 | P2 (Inválida - Tipo Errado) | `validarCPF(null)` | FALSE | FALSE | PASS |
| CTU-005 | P3 (Inválida - Regra de negócio) | `validarCPF("111.111.111-11")` | FALSE | FALSE | PASS |
| CTU-006 | P4 (Inválida - Vazio) | `validarCPF("")` | FALSE | FALSE | PASS |
| CTU-007 | P4 (Inválida - Vazio) | `validarCPF("   ")` | FALSE | FALSE | PASS |
| CTU-008 | AVL-1 (Abaixo Min) | `validarCPF("1234567890")` | FALSE | FALSE | PASS |
| CTU-009 | AVL-2 (Mínimo) | `validarCPF("12345678909")` | TRUE | TRUE | PASS |
| CTU-010 | AVL-6 (Acima Max) | `validarCPF("123456789012")` | FALSE | FALSE | PASS |

### Tarefa 3.2: Execução e Comprovação da Falha

Todos os testes passaram com sucesso! A função [validarCPF](file:///c:/Users/Danilo54279466/Documents/GitHub/Repositorios_Testes/Desafio/modulo_pi.js#L11-L60) está funcionando corretamente conforme especificado.

### Tarefa 3.3: Registro Formal do Defeito

Nenhum defeito foi encontrado durante os testes, o que indica que a função foi implementada corretamente desde a primeira versão.

## 📊 Conclusão

A aplicação das técnicas de Particionamento de Equivalência e Análise de Valor Limite permitiu criar um conjunto abrangente de testes que cobrem diversos cenários da função de validação de CPF. A metodologia utilizada garante uma maior confiabilidade do código e ajuda a identificar possíveis falhas antes que elas cheguem ao ambiente de produção.