function exibir() {
    var valor_hora = parseFloat(document.getElementById("valor_hora").value);
    var qtd_hora = parseFloat(document.getElementById("qtd_hora").value);

    var salarioBruto = valor_hora * qtd_hora;
    var percentualIR = 0;

    if(salarioBruto <= 900) {
        percentualIR = 0;
    }
    else if(salarioBruto >900 && salarioBruto <=1500) {
        percentualIR = 5;
    }
    else if(salarioBruto >1500 && salarioBruto <=2500) {
        percentualIR = 10;
    }
    else if(salarioBruto >2500) {
        percentualIR = 20;
    }

    var ir = (salarioBruto / 100) * percentualIR;
    var inss = (salarioBruto / 100) * 10;
    var fgts = (salarioBruto / 100) * 11;
    var totadesc = ir + inss;
    var salarioLiquido = salarioBruto - totadesc;

    document.write("Salario Bruto: " + valor_hora + qtd_hora + salarioBruto);
    document.write("IR: " + percentualIR + ir);
    document.write("INSS: " + inss);
    document.write("FGTS: " + fgts);
    document.write("Total: " + totadesc);
    document.write("Salario liquido: " + salarioLiquido);
}

