
function calcularTabela() {

// Obter os valores do formulário

let n1 = parseInt(document.getElementById('n1').value);
let operador = document.getElementById('operador').value;
let limite = parseInt(document.getElementById('limite').value)

console.log(n1, operador, limite)

// Validação dos valores
if (isNaN(n1) || isNaN(limite)) {
    alert('Digite um número válido');
    return;
}

// Cria lista de resultados

let lista = document.getElementById('listaResultados');
for (let i = 1; i<= limite; i++) {
    let resultado;
    switch(operador) {
        case 'adicao' :
            resultado: n1 + i;
            break;
        case 'subtracao' :
            resultado: n1 - i;
            break;
        case 'multiplicacao' :
            resultado: n1 * i;
            break;
        case 'divisao' :
            resultado: n1 / i;
            break;

    }



}

// let item = document.createElement('li');
// item.textContent = `${n1} ${operador} ${i} = ${resultado}`;
// lista.appendChild(item);


}



console.log(calcularTabela());


