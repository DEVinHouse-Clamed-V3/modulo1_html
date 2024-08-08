function isEven(num) {
    return num % 2 === 0
}

const number = parseInt(prompt("Digite um número"))
const result = isEven(number)

if (result) {
    console.log('O número é par')
} else {
    console.log('O número é ímpar')
}