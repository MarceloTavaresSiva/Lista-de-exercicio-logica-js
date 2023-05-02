function verificar() {
    var letra = (document.getElementById("letra").value);

    if(letra == "f") {
        document.write("F - Feminino");
    }
    else if(letra == "m") {
        document.write("M - Masculino");
    }
    else {
        document.write("Número Invalido");
    }
}



