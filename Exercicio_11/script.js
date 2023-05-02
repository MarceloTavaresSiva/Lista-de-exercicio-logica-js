function exibir() {
    var salario = parseFloat(document.getElementById("salario").value);
    var percentual = 0;

    if(salario <= 280) {
        percentual = 20;
    }
    else if(salario > 280 && salario <700) {
        percentual = 15;
    }
    else if(salario >= 700 && salario < 1500) {
        percentual = 10;
    }
    else if(salario >= 1500) {
        percentual = 5;
    }

    var aumento = (salario / 100) * percentual;
    var novoSalario = salario + aumento;

    document.write("Salario = " + salario + "<br />");
    document.write("Percentual = " + percentual+ "<br />");
    document.write("Aumento = " + aumento+ "<br />");
    document.write("Salario ajustado = " + novoSalario);
}



