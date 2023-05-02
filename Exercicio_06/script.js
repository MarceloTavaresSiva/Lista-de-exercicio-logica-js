function verificar() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);


    if(nota1 >= nota2 && nota1 >= nota3) {
        document.write("Maior numero e: " + nota1);
    }
    else if(nota2 >= nota1 && nota2 >= nota3) {
        document.write("Maior numero e: " + nota2);
    }
    else if(nota3 >= nota1 && nota3 >= nota2) {
        document.write("Maior numero e: " + nota3);
    }
}


