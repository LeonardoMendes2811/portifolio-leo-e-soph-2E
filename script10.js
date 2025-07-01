function contar() {
    let mostraHTML = document.getElementById("mostraHTML");

    let contador = 1;

    while (contador <= 10) {
    mostraHTML.innerHTML += `${contador} &#128073; `;
    contador++;
    }

     mostraHTML.innerHTML += `${contador}&#128556;  `;

     parOuimpar = contador % 2;
}
if (parOuimpar== 0) { 
    alert("O número " + contador + " é par")
     <contar/mark> "o numero é par" <contar/mark>

}
