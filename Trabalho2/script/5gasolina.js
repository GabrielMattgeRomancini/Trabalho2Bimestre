let valorPago = document.querySelector("#valorPago");
let precoGasolina = document.querySelector("#precoGasolina");

function quantidadeGasolina(){
    let a = Number(valorPago.value);
    let b = Number(precoGasolina.value);

    resultado.innerHTML = "Foram colocados " + a / b + "L de gasolina" ; 
}

botao.onclick = function(){
    quantidadeGasolina();
}
