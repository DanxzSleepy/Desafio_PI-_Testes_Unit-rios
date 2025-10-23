# Análise de Valor Limite (AVL)

## Tarefa 2.2: Análise de Valor Limite

Se a sua função lida com limites numéricos ou de tamanho de string (Ex: CPF de 11 dígitos), liste os 6 pontos de teste obrigatórios.

| Ponto de Teste | Valor (Ex: Tamanho do CPF) | Resultado Esperado | Objetivo do Teste |
|----------------|---------------------------|-------------------|-------------------|
| AVL-1: Abaixo do Mínimo (-1) | 10 dígitos | INVÁLIDO | Verifica se a regra exata de 11 dígitos foi usada corretamente |
| AVL-2: Mínimo (No Limite) | 11 dígitos | VÁLIDO | Verifica se o tamanho mínimo permitido funciona |
| AVL-3: Acima do Mínimo (+1) | 12 dígitos | INVÁLIDO | Verifica se a regra exata de 11 dígitos foi usada corretamente |