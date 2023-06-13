let inteiro = document.querySelector("#inteiro");

function divideInteiro(){

    let numero = Number(inteiro.value);
    
    if(numero > 1000){
        resultado2.innerHTML = ""
        resultado1.innerHTML = ""
        resultado.innerHTML = "Por favor coloque um numero menor que 1000"
    }
    else{
        resultado.innerHTML = "Centena: " + Math.floor(numero / 100);
        resultado1.innerHTML = "Dezena: " + Math.floor((numero % 100)/10);
        resultado2.innerHTML = "Unidade: " + numero % 10;
    }


}

botao.onclick = function(){

    divideInteiro();
}