/**
 * Casos de Teste Unitário para a função validarCPF
 */

// Importa a função a ser testada (para uso no Node.js)
if (typeof module !== 'undefined' && module.exports) {
    var { validarCPF } = require('../BLOC1_ACAO/modulo_pi.js');
}

// Função para executar um caso de teste
function executarTeste(nome, funcaoTeste, resultadoEsperado) {
    try {
        const resultado = funcaoTeste();
        const status = resultado === resultadoEsperado ? "PASS" : "FAIL";
        console.log(`[${status}] ${nome}: Esperado=${resultadoEsperado}, Obtido=${resultado}`);
        return { nome, resultadoEsperado, resultadoObtido: resultado, status };
    } catch (erro) {
        console.log(`[ERROR] ${nome}: ${erro.message}`);
        return { nome, resultadoEsperado, resultadoObtido: "ERRO", status: "ERROR" };
    }
}

// Lista de casos de teste
const casosDeTeste = [
    // Particionamento de Equivalência - Partições Válidas
    {
        id: "CTU-001",
        baseado: "P1 (Válido)",
        descricao: "CPF válido com dígitos verificadores corretos",
        funcao: () => validarCPF("123.456.789-09"),
        esperado: true
    },
    {
        id: "CTU-002",
        baseado: "P1 (Válido)",
        descricao: "CPF válido sem formatação",
        funcao: () => validarCPF("12345678909"),
        esperado: true
    },
    
    // Particionamento de Equivalência - Partições Inválidas
    {
        id: "CTU-003",
        baseado: "P2 (Inválida - Tipo Errado)",
        descricao: "Entrada não string (número)",
        funcao: () => validarCPF(12345678909),
        esperado: false
    },
    {
        id: "CTU-004",
        baseado: "P2 (Inválida - Tipo Errado)",
        descricao: "Entrada não string (null)",
        funcao: () => validarCPF(null),
        esperado: false
    },
    {
        id: "CTU-005",
        baseado: "P3 (Inválida - Regra de negócio)",
        descricao: "CPF com todos os dígitos iguais",
        funcao: () => validarCPF("111.111.111-11"),
        esperado: false
    },
    {
        id: "CTU-006",
        baseado: "P4 (Inválida - Vazio)",
        descricao: "CPF vazio",
        funcao: () => validarCPF(""),
        esperado: false
    },
    {
        id: "CTU-007",
        baseado: "P4 (Inválida - Vazio)",
        descricao: "CPF com espaços",
        funcao: () => validarCPF("   "),
        esperado: false
    },
    
    // Análise de Valor Limite
    {
        id: "CTU-008",
        baseado: "AVL-1 (Abaixo Min)",
        descricao: "CPF com 10 dígitos",
        funcao: () => validarCPF("1234567890"),
        esperado: false
    },
    {
        id: "CTU-009",
        baseado: "AVL-2 (Mínimo)",
        descricao: "CPF com 11 dígitos",
        funcao: () => validarCPF("12345678909"),
        esperado: true
    },
    {
        id: "CTU-010",
        baseado: "AVL-6 (Acima Max)",
        descricao: "CPF com 12 dígitos",
        funcao: () => validarCPF("123456789012"),
        esperado: false
    }
];

// Executa todos os casos de teste
console.log("=== EXECUTANDO CASOS DE TESTE UNITÁRIO ===\n");

const resultados = [];
casosDeTeste.forEach(caso => {
    const resultado = executarTeste(
        `${caso.id} - ${caso.descricao}`, 
        caso.funcao, 
        caso.esperado
    );
    resultados.push({
        id: caso.id,
        baseado: caso.baseado,
        descricao: caso.descricao,
        esperado: caso.esperado,
        obtido: resultado.resultadoObtido,
        status: resultado.status
    });
});

// Exibe resumo
console.log("\n=== RESUMO DOS TESTES ===");
const total = resultados.length;
const passaram = resultados.filter(r => r.status === "PASS").length;
const falharam = resultados.filter(r => r.status === "FAIL").length;
const erros = resultados.filter(r => r.status === "ERROR").length;

console.log(`Total de testes: ${total}`);
console.log(`Passaram: ${passaram}`);
console.log(`Falharam: ${falharam}`);
console.log(`Erros: ${erros}`);

// Exibe tabela com resultados detalhados
console.table(resultados);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { casosDeTeste, resultados };
}