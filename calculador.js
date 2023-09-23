const vitorias = 1000
const derrotas = 100

function mensagem(vitorias, derrotas){
    const saldo = derrotas - vitorias;
    let nivel;
    if (saldo < 10){
    nivel = "Ferro"}
    else if (saldo >= 11  && saldo < 20){
        nivel = "Bronze"
    }
    else if (saldo >= 21  && saldo < 50){
        nivel = "Prata"
    }
    else if (saldo >= 51  && saldo < 80){
        nivel = "Ouro"
    }
    else if (saldo >= 81  && saldo < 90){
        nivel = "Diamante"
    }
    else if (saldo >= 91  && saldo < 100){
        nivel = "Lendario"
    }
    else if (saldo >= 101){
        nivel = "Imortal"
    }
    const mensagem = "O Herói tem de saldo de vitórias de ${nivel} está no nível ${nivel}"
}