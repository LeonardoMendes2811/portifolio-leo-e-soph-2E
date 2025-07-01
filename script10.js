function contar() {
    let mostraHTML = document.getElementById("mostraHTML");
let contar
    let contador = 1;

    while (contador <= 10) {
    mostraHTML.innerHTML += `${contador} &#128073; `;
    contador++;
    }

     mostraHTML.innerHTML += `${contador}&#128556;  `;

  parOuimpar = contador % 2 ;
}
if (parOuimpar== 0) {
   lert = ( <mark> + resultado + </mark> ) 
} else {
    alert( <b>resultado </b> );
}


