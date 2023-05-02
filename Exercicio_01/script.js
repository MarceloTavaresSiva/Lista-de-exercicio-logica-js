function exibir() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if(num1 > num2) {
        document.write("O num1 e maior = " + num1);
    }
    else {
        document.write("O num2 e maior = " + num2);
    }
}


