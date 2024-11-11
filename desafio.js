// Declaração das variáveis a serem utilizadas no código
let nomeDoHeroi = "Lirovsk"
let xpDOHeroi = 1200
let xpAuxDeConta = 1
let contador = 0
const nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
const xpNcessaria = [1000, 2000, 5000, 7000, 8000, 9000, 10000]

//tratmento de dados
while (xpAuxDeConta>0 && contador<=nivelHeroi.length){
    xpAuxDeConta = xpDOHeroi - xpNcessaria[contador]
    if (xpAuxDeConta>0){
        contador++
    }
    
}


// output
console.log("O Herói de nome "+ nomeDoHeroi, "está no nível de " + nivelHeroi[contador])