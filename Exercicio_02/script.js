function verificar() {
    var num1 = parseFloat(document.getElementById("num1").value);

    if(num1 >= 0) {
        document.write("O numero informado e positivo: ");
    }
    else {
        document.write("O numero informado e negativo");
    }
}

