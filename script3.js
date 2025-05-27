let nome = Number(window.prompt("digite seu nome: "))
let nota1 = Number(window.prompt("digite sua nota"+ nome +":"))
let nota2 = Number(window.prompt("digite sua nota2"+ nome +":"))
let nota3 = Number(window.prompt("digite sua nota3"+ nome +":"))
let pontosFaltando;

let total = (nota1 + nota2 + nota3)/ 3;
alura = "alura"
alert("media final:" + total )
if(total >=60){
    alert("vc atingiu a media" + total )
}
else{
    pontosFaltando = 60 - total;
    alert(nome + "reprovado faltaram" + pontosFaltando + "pontos, estudar no alura")
}

