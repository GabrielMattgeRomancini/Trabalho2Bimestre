let dias = document.querySelector("#dias");
let meses = document.querySelector("#meses");

function calculaDias(){
    let a = Number(dias.value);
    let b = Number(meses.value);

    resultado.innerHTML ="Se passaram " + (a + b*30) + "  dias desde o comeco do ano";
}


botao.onclick = function(){
    calculaDias();
}