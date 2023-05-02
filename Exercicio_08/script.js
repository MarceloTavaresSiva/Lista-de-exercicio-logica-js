function verificar() {
    var preco1 = parseFloat(document.getElementById("preco1").value);
    var preco2 = parseFloat(document.getElementById("preco2").value);
    var preco3 = parseFloat(document.getElementById("preco3").value);

    if(preco1 <= preco2 && preco1 <= preco3) {
        document.write("Compre o produto 1");
    }
    else if(preco2 <= preco1 && preco2 <= preco3) {
        document.write("Compre o produto 2");
    }
    else if(preco3 <= preco1 && preco3 <= preco2) {
        document.write("Compre o produto 3");
    }
}
