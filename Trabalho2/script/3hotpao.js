let pao = document.querySelector("#pao");
let broa = document.querySelector("#broa");

function calculo(){

let a = Number(pao.value);
let b = Number(broa.value);
let total = a*0.12 + b*1.50
let porcentagem = total*0.10;

resultado.innerHTML = total.toFixed(2);
resultado2.innerHTML = porcentagem.toFixed(2);

}

botao.onclick = function(){
    calculo();
}