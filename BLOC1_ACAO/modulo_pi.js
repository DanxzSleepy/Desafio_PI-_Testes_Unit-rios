/**
 * Função para validar CPF brasileiro
 * @param {string} cpf - CPF a ser validado (formato: 12345678900 ou 123.456.789-00)
 * @return {boolean} - true se o CPF for válido, false caso contrário
 */
function validarCPF(cpf) {
    // Verifica se o parâmetro é uma string
    if (typeof cpf !== 'string') {
        return false;
    }

    // Remove pontos e traços
    const cpfLimpo = cpf.replace(/[.-]/g, '');
    
    // Verifica se tem 11 dígitos
    if (cpfLimpo.length !== 11) {
        return false;
    }
    
    // Verifica se contém apenas números
    if (!/^\d+$/.test(cpfLimpo)) {
        return false;
    }
    
    // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
    if (/^(\d)\1+$/.test(cpfLimpo)) {
        return false;
    }
    
    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpfLimpo.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    const digito1 = (resto === 10 || resto === 11) ? 0 : resto;
    
    // Verifica o primeiro dígito verificador
    if (digito1 !== parseInt(cpfLimpo.charAt(9))) {
        return false;
    }
    
    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpfLimpo.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    const digito2 = (resto === 10 || resto === 11) ? 0 : resto;
    
    // Verifica o segundo dígito verificador
    if (digito2 !== parseInt(cpfLimpo.charAt(10))) {
        return false;
    }
    
    return true;
}

// Exporta a função para ser usada em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validarCPF };
}