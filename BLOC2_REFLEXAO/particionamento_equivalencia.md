# Particionamento de Equivalência (PE)

## Tarefa 2.1: Particionamento de Equivalência

Liste as classes de entrada que a sua função deve tratar.

| Partição | Descrição da Partição | Exemplo de Teste | Resultado Esperado (Válido/Inválido) |
|----------|----------------------|------------------|-------------------------------------|
| P1 | VÁLIDA (Condição de sucesso) | "123.456.789-09" | VÁLIDO |
| P2 | INVÁLIDA (Tipo errado de dado) | 12345678909 (número) | INVÁLIDO |
| P3 | INVÁLIDA (Regra de negócio falha - como CPF com todos os dígitos iguais) | "111.111.111-11" | INVÁLIDO |
| P4 | INVÁLIDA (Null/Vazio) | "" | INVÁLIDO |