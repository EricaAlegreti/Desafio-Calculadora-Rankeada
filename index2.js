let level = ""
function calcRank(victory , defeat){
    let calc = victory - defeat
    return calc
}
let result = calcRank(20 , 12)


if (result < 10) {
    level = "Ferro"
} else if (result > 10 && result <20) {
    level = "Bronze"
} else if (result > 21 && result <50) {
    level = "Prata"
} else if (result > 51 && result <80) {
    level = "Ouro"
} else if (result > 81 && result <90) {
    level = "Diamante"
} else if (result > 91 && result <100) {
    level = "Lendário"
} else if ( result <101) {
    level = "Imortal"
}


console.log("O Herói tem de saldo de " + result + " está no nível de " + level)