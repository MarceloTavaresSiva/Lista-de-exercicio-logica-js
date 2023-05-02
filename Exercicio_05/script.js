function verificar() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var media = 0;

    media = (nota1 + nota2) / 2;

    if(media == 10) {
        document.write("Aprovado com distinçao"); 
    } else if(media >= 7) {
        document.write("Aprovado");
    }
    else {
        document.write("Reprovado");
    }

}