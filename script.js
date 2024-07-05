function calcularTabela() {
    const numero = parseFloat(document.getElementById('n1').value);
    const operacao = document.getElementById('operacao').value;
    const resultadoDiv = document.querySelector('.resultado');
    resultadoDiv.innerHTML = ''; // Limpa o resultado anterior

    if (isNaN(numero)) {
        resultadoDiv.innerHTML = '<p>Por favor, digite um número válido.</p>';
        return;
    }

    for (let i = 1; i <= 10; i++) {
        let calculo;
        switch (operacao) {
            case 'multiplicacao':
                calculo = numero * i;
                resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${calculo}</p>`;
                break;
            case 'adicao':
                calculo = numero + i;
                resultadoDiv.innerHTML += `<p>${numero} + ${i} = ${calculo}</p>`;
                break;
            case 'subtracao':
                calculo = numero - i;
                resultadoDiv.innerHTML += `<p>${numero} - ${i} = ${calculo}</p>`;
                break;
            case 'divisao':
                if (i === 0) {
                    resultadoDiv.innerHTML += `<p>${numero} / ${i} = Divisão por zero não é permitida</p>`;
                } else {
                    calculo = numero / i;
                    resultadoDiv.innerHTML += `<p>${numero} / ${i} = ${calculo.toFixed(2)}</p>`;
                }
                break;
            default:
                resultadoDiv.innerHTML += '<p>Operação inválida.</p>';
        }
    }
}

// Evita o envio do formulário ao clicar no botão
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularTabela();
});

// https://github.com/DarqWendel/Tabuada-JS.git