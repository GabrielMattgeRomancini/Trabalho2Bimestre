let Nome = document.querySelector('#Nome');
let Idade = document.querySelector('#Idade');
let h2Resultado = document.querySelector('#h2Resultado');
let btCalcular = document.querySelector('#btCalcular')

function CalcularResultado(){
let ValorIdade = Number(Idade.value);
let ValorNome = String(Nome.value);
let ResultadoDias = ValorIdade * 365;

h2Resultado.textContent = ValorNome + " voce possui " + ResultadoDias + " dias de vida "
}

btCalcular.onclick = function(){
    CalcularResultado();
}