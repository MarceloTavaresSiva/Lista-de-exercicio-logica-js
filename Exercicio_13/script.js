function exibir() {
    var semana = (document.getElementById("semana").value);

    switch (semana) {
        case 1: document.write("Domingo"); break;
        case 2: document.write("Segunda"); break;
        case 3: document.write("Terça"); break;
        case 4: document.write("Quarta"); break;
        case 5: document.write("Quinta"); break;
        case 6: document.write("Sexta"); break;
        case 7: document.write("Sábado"); break;
        default: document.write("Número invalido: ");
    }
}


