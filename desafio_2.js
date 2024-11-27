/// functions definitions
function numberOfWins (wins, looses){
    return wins - looses
}

function rankDefinition (wins, looses){
    if (numberOfWins(wins, looses) <= 10){
        return 0
    }
    else if (numberOfWins(wins, looses) >10 && numberOfWins(wins, looses) <= 20){
        return 1
    }
    else if (numberOfWins(wins, looses) > 20 && numberOfWins(wins, looses) <=50){
        return 2
    }
    else if (numberOfWins(wins, looses) > 50 && numberOfWins(wins, looses) <=80){
        return 3
    }
    else if (numberOfWins(wins, looses) > 80 && numberOfWins(wins, looses) <=90){
        return 4
    }
    else if (numberOfWins(wins, looses) > 90 && numberOfWins(wins, looses) <=100){
        return 5
    }
    else if (numberOfWins(wins, looses) >= 101){
        return 6
    }
}
/// main code
const rankedLevels = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
let wins = 100
let looses = 50

console.log(`O Herói tem saldo de ${numberOfWins(wins, looses)} está no nível de ${rankedLevels[rankDefinition(wins, looses)]}`)