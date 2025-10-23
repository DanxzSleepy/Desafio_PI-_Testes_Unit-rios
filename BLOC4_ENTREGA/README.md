# Desafio PI: Testes Unitários, Módulos e Qualidade

## Estrutura do Projeto

```
Desafio/
├── modulo_pi.js          # Função de validação de CPF
├── casos_teste.js        # Casos de teste unitário
├── runner_unitario.html  # Interface web para testes
└── documentacao.md       # Documentação completa
```

## Como Executar os Testes

### Opção 1: Via Node.js (recomendado)

```bash
cd Desafio
node casos_teste.js
```

### Opção 2: Via Navegador

1. Abra o arquivo `runner_unitario.html` em um navegador
2. Pressione F12 para abrir o console
3. Veja os resultados dos testes no console

## Função Testada

A função `validarCPF(cpf)` valida números de CPF brasileiros, verificando:
- Formato correto (11 dígitos)
- Dígitos verificadores válidos
- Não permite todos os dígitos iguais (ex: 111.111.111-11)
- Aceita formatos com e sem pontuação

## Resultados

Todos os 10 casos de teste passaram com sucesso:
- 10 Passaram
- 0 Falharam
- 0 Erros

A função está funcionando corretamente conforme as especificações.