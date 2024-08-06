const idade = 70

if (idade >= 18 && idade < 65) {
    console.log("É adulto")
} else if (idade >= 65) {
    console.log("Idoso")
} else if (idade < 2) {
    console.log("Bebê")
} else {
    console.log("Não é adulto e nem idoso")
}


// Switch
const dia = 1
// 1 - domingo, 2 - segunda, 3 - terca
switch (dia) {
    case 1:
        console.log("domingo")
        break;
    case 2:
        console.log("segunda")
        break;
    case 3:
        console.log("terça")
        break;
    case 4:
        console.log("quarta")
        break;
    case 5:
        console.log("quinta")
        break;
    case 6:
        console.log("sexta")
        break;
    case 7:
        console.log("sábado")
        break;
    default:
        console.log("Dia inválido.")
        break;
}








// console.log("Olá, Mundo. Mensagem do JS.")
// console.log("Mensagem 2")

// // alert("Mensagem para o usuário")

// const variavelConstante = "Florianópolis"
// // variavelConstante = "São Paulo" // não permitido por ser constante

// // let || var
// let variavelDinamica = "Rio de Janeiro"
// variavelDinamica = "São Paulo"

// alert(variavelDinamica)

// function somarDoisNumeros(numero1, numero2) {
//     const resultado = numero1 + numero2
//     console.log(resultado)
// }

// somarDoisNumeros(8, 64)

