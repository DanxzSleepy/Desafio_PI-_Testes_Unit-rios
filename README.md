# Desafio PI: Testes Unitários, Módulos e Qualidade

## 👥 Equipe de Desenvolvimento
- Lucas Eduardo
- Nikolas Kaio
- Rihanna Monteiro
- José Miguel
- Danilo Ícaro

## 🎯 Objetivo
Aplicar os conceitos de Teste Unitário, Particionamento de Equivalência (PE) e Análise de Valor Limite (AVL) em uma função crítica do Projeto Integrador (PI).

## 📁 Estrutura do Projeto

```
Desafio/
├── BLOC1_ACAO/              # Identificação e Isolamento do Módulo
│   └── modulo_pi.js         # Função de validação de CPF
├── BLOC2_REFLEXAO/          # Aplicação das Técnicas de Caixa Preta
│   ├── particionamento_equivalencia.md
│   └── analise_valor_limite.md
├── BLOC3_NOVA_ACAO/         # Execução e Documentação
│   ├── casos_teste.js       # Casos de teste unitário
│   └── runner_unitario.html # Interface web para testes
└── BLOC4_ENTREGA/           # Documentação Final
    ├── documentacao.md      # Documentação completa do processo
    └── README.md            # Instruções de uso
```

## 📋 O que foi entregue

### ✅ BLOC 1: AÇÃO - Identificação e Isolamento do Módulo
- Função escolhida: `validarCPF(cpf)` para validar números de CPF brasileiros
- Função isolada no arquivo [modulo_pi.js](file:///c:/Users/Danilo54279466/Documents/GitHub/Repositorios_Testes/Desafio/BLOC1_ACAO/modulo_pi.js)

### ✅ BLOC 2: REFLEXÃO - Aplicação das Técnicas de Caixa Preta
- Particionamento de Equivalência identificando 4 classes de entrada
- Análise de Valor Limite com 3 pontos críticos (10, 11 e 12 dígitos)

### ✅ BLOC 3: NOVA AÇÃO - Execução e Documentação
- 10 casos de teste unitário abrangendo todas as partições e valores limite
- Runner HTML para execução dos testes no navegador (corrigido os caminhos)
- Todos os testes passaram com sucesso (100% de aprovação)

### ✅ BLOC 4: ENTREGA
- Documentação completa do processo
- Estrutura organizada por blocos

## ▶️ Como Executar os Testes

### Opção 1: Via Node.js (recomendado)
```bash
node c:\Users\Danilo54279466\Documents\GitHub\Repositorios_Testes\Desafio\BLOC3_NOVA_ACAO\casos_teste.js
```

Ou alternativamente:
```bash
cd c:\Users\Danilo54279466\Documents\GitHub\Repositorios_Testes\Desafio\BLOC3_NOVA_ACAO
node casos_teste.js
```

### Opção 2: Via Navegador (requer servidor local)
1. Inicie um servidor local na pasta Desafio:
   ```bash
   cd c:\Users\Danilo54279466\Documents\GitHub\Repositorios_Testes\Desafio
   python -m http.server 8000
   ```
2. Acesse http://localhost:8000/BLOC3_NOVA_ACAO/runner_unitario.html
3. Pressione F12 para abrir o console e veja os resultados

## 🧪 Resultados Confirmados
- ✅ 10 testes executados
- ✅ 10 passaram
- ✅ 0 falharam
- ✅ 0 erros

A função [validarCPF](file:///c:/Users/Danilo54279466/Documents/GitHub/Repositorios_Testes/Desafio/BLOC1_ACAO/modulo_pi.js#L11-L60) está funcionando corretamente conforme as especificações.