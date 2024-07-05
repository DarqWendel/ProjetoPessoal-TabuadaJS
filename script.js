// function calcularTabela() {
//     const numero = parseFloat(document.getElementById('n1').value);
//     const operacao = document.getElementById('operacao').value;
//     const resultadoDiv = document.querySelector('.resultado');
//     resultadoDiv.innerHTML = ''; // Limpa o resultado anterior

//     if (isNaN(numero)) {
//         resultadoDiv.innerHTML = '<p>Por favor, digite um número válido.</p>';
//         return;
//     }

//     for (let i = 1; i <= 10; i++) {
//         let calculo;
//         switch (operacao) {
//             case 'multiplicacao':
//                 calculo = numero * i;
//                 resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${calculo}</p>`;
//                 break;
//             case 'adicao':
//                 calculo = numero + i;
//                 resultadoDiv.innerHTML += `<p>${numero} + ${i} = ${calculo}</p>`;
//                 break;
//             case 'subtracao':
//                 calculo = numero - i;
//                 resultadoDiv.innerHTML += `<p>${numero} - ${i} = ${calculo}</p>`;
//                 break;
//             case 'divisao':
//                 if (i === 0) {
//                     resultadoDiv.innerHTML += `<p>${numero} / ${i} = Divisão por zero não é permitida</p>`;
//                 } else {
//                     calculo = numero / i;
//                     resultadoDiv.innerHTML += `<p>${numero} / ${i} = ${calculo.toFixed(2)}</p>`;
//                 }
//                 break;
//             default:
//                 resultadoDiv.innerHTML += '<p>Operação inválida.</p>';
//         }
//     }
// }

// // Evita o envio do formulário ao clicar no botão
// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     calcularTabela();
// });

// document.querySelector('button[type="reset"]').addEventListener('click', function() {
//     document.querySelector('.resultado').innerHTML = 'Mostrar Tabuada';
// });


// https://github.com/DarqWendel/Tabuada-JS.git
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
        let p = document.createElement('p');
        switch (operacao) {
            case 'multiplicacao':
                calculo = numero * i;
                p.innerHTML = `${numero} x ${i} = ${calculo}`;
                break;
            case 'adicao':
                calculo = numero + i;
                p.innerHTML = `${numero} + ${i} = ${calculo}`;
                break;
            case 'subtracao':
                calculo = numero - i;
                p.innerHTML = `${numero} - ${i} = ${calculo}`;
                break;
            case 'divisao':
                if (i === 0) {
                    p.innerHTML = `${numero} / ${i} = Divisão por zero não é permitida`;
                } else {
                    calculo = numero / i;
                    p.innerHTML = `${numero} / ${i} = ${calculo.toFixed(2)}`;
                }
                break;
            default:
                p.innerHTML = 'Operação inválida.';
        }
        resultadoDiv.appendChild(p);
    }

    // Adiciona animação aos elementos gerados
    const resultados = document.querySelectorAll('.resultado p');
    resultados.forEach((resultado, index) => {
        resultado.style.animationDelay = `${index * 0.1}s`;
    });
}

// Evita o envio do formulário ao clicar no botão
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularTabela();
});

document.querySelector('button[type="reset"]').addEventListener('click', function() {
    document.querySelector('.resultado').innerHTML = 'Mostrar Tabuada';
});

