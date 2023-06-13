let pizza = document.querySelector("#pizza");

function calculoAreaPizza(){

    let a = Number(pizza.value);
    
    resultado.innerHTML = (3.14 * a * a).toFixed(2);

}

botao.onclick = function(){

    calculoAreaPizza();
}