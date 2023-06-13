
let Input10 = document.querySelector ("#Input10");
let Input12 = document.querySelector ("#Input12");
let Input15 = document.querySelector ("#Input15");
let btAdd = document.querySelector ("#btAdd");
let h1Resultado = document.querySelector ("#h1Resultado");

function AddCarrinho(){
    let valor10 = Number(Input10.value);
    let valor12 = Number(Input12.value);
    let valor15 = Number(Input15.value);


h1Resultado.textContent =
(10*(valor10)) + (12*(valor12)) + (15*(valor15));

}

btAdd.onclick = function(){
    AddCarrinho();
}