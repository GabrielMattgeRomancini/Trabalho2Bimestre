let valor = document.querySelector("#valor");


function divisao(){
    let num = Number(valor.value);
    let a = num % 3;
    let b = num - a;
    let c = b / 3;
    let resultado = c + a;

    resultado1.innerHTML = "Carlos vai pagar = R$" + c;
    resultado2.innerHTML = "Andre vai pagar = R$" + c;
    resultado3.innerHTML = "Felipe vai pagar = R$" + resultado.toFixed(2);


}

botao.onclick = function(){
    divisao();
}