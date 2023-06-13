let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");



function calculaArea() {
    var largura = window.document.getElementById("largura1").value;
    var altura = window.document.getElementById("altura1").value;
    if (largura == altura){
        resultado.innerHTML = "Nao trabalhamos com terrenos quadrados";
    } else{
        resultado.innerHTML = "Area total = " + largura*altura + " metros quadrados";
    }
    document.getElementById("caixa").style.width = largura +'px';
    document.getElementById("caixa").style.height = altura +'px';
    alerta.innerHTML = "Imagem de um retangulo para ilustrar o tamanho da area";
}


