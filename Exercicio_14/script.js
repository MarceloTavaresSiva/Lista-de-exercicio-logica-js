function exibir() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    
    var media = (nota1 + nota2) /2;
    var aproveitamento = "";

    if(media>=9 && media <=10) {
        aproveitamento = "A";
    }
    else if(media >= 7.5 && media <9) {
        aproveitamento = "B";
    }
    else if(media >=6 && media <7.5) {
        aproveitamento = "C";
    }
    else if(media >=4 && media <6) {
        aproveitamento = "D";
    }
    else if(media >=0 && media <4) {
        aproveitamento = "E";
    }

    document.write("Nota 1: " + nota1);
    document.write("Nota 2: " + nota2);
    document.write("Media: " + media);
    document.write("Conceito: " + aproveitamento);

    switch (aproveitamento) {
        case "A":
        case "B":
        case "C": document.write("Aprovado"); break;
        case "D":
        case "E":document.write("Reprovado"); break;
    }
}
