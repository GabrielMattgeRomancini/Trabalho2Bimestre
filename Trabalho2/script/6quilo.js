let inputQuantidade = document.querySelector ('#inputQuantidade');
let inputvlrKg = document.querySelector ('#inputvlrKg');
let btCalcular = document.querySelector ('#btCalcular');
let h1ValorFinal = document.querySelector ('#h1ValorFinal');

function CalcularValor(){
    let Quantidade = Number(inputQuantidade.value);
    let resultado = Quantidade * 12;
    h1ValorFinal.textContent = resultado.toFixed(2);


}

btCalcular.onclick = function(){
    CalcularValor();
}