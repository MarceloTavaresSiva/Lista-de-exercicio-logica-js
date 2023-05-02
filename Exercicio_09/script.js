function verificar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    if(num1 <= num2 && num1 <= num3 && num2 <= num3) {
        document.write(num3 + " - " + num2 + " - " + num1);
    }
    else if(num1 <= num2 && num1 <= num3 && num3 <= num2) {
        document.write(num2 + " - " + num3 + " - " + num1);
    }
    else if(num2 <= num1 && num2 <= num3 && num1 <= num3) {
        document.write(num3 + " - " + num1 + " - " + num2);
    }
    else if(num2 <= num1 && num2 <= num3 && num3 <= num1) {
        document.write(num3 + " - " + num3 + " - " + num2);
    }
    else if(num3 <= num1 && num3 <= num2 && num1 <= num2) {
        document.write(num2 + " - " + num1 + " - " + num3);
    }
    else if(num3 <= num1 && num3 <= num2 && num2 <= num1) {
        document.write(num1 + " - " + num2 + " - " + num3);
    }
}

