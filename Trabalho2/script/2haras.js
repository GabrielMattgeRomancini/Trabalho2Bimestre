let valor = document.querySelector("#valor");


function ferradura(){
    let num = Number(valor.value);

    resultado1.innerHTML = "Sao " + num*4 + " ferraduras" ;

}

botao.onclick = function(){
    ferradura();
}