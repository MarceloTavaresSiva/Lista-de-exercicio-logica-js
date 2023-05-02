function verificar() {
    var letra = (document.getElementById("letra").value);
    
    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        document.write("Vogal");
    }
    else {
        document.write("Consoante");
    }

}