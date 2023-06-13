let dias = document.querySelector("#dias");

function calculaDias(){
    let Dias = Number(dias.value);
    let qtdAnos = Math.floor(Dias/365);
    let qtdMeses = Math.floor((Dias % 365) / 30);
    let qtdDias = Math.floor((Dias % 365) % 30);

    resultado.innerHTML = "Foram " + qtdAnos + " anos, " + qtdMeses + " meses e " + qtdDias + " dias sem acidente";
}

botao.onclick = function(){
    calculaDias();
}