let salario = document.querySelector("#salario");

function calculaSalario(){
    let salarioInicial = Number(salario.value);
    let salarioAumento = salarioInicial + salarioInicial*15/100

    resultado1.innerHTML = "Salario inicial = R$" + salarioInicial;
    resultado2.innerHTML = "Salario com aumento = R$" + salarioAumento;
    resultado3.innerHTML = "Salario com desconto de imposto = R$" + (salarioAumento - salarioAumento*8/100).toFixed(2);
}

botao.onclick = function(){
    calculaSalario();
}