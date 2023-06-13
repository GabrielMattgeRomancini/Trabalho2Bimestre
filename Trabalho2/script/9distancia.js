let x1 = document.querySelector("#x1");
let y1 = document.querySelector("#y1");
let x2 = document.querySelector("#x2");
let y2 = document.querySelector("#y2");

function calculaDistancia(){
    let a = Number(x1.value);
    let b = Number(y1.value);
    let c = Number(x2.value);
    let d = Number(y2.value);

    resultado.innerHTML = (Math.sqrt(Math.pow(c - a, 2) + (Math.pow(d - b, 2)))).toFixed(2)
}

botao.onclick = function(){
    calculaDistancia();
}
