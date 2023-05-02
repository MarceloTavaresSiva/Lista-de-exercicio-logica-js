function verificar() {
    var turno = (document.getElementById("turno").value);

    switch (turno) {
        case 'm':
        case 'M': document.write("Bom dia!"); break;
        case 'v':
        case 'V': document.write("Boa Tarde!"); break;
        case 'n':
        case 'N': document.write("Boa Noite!"); break;
        default: document.write("Valor invalido!");;
    }
}

