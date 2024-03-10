const prompt = require('prompt-sync')()

function gerarSequenciaFibonacci(limite) {
  let valorFibonnaci = [0, 1]
  let i = 0

  while (valorFibonnaci[valorFibonnaci.length - 1] < limite) {
    valorFibonnaci.push(valorFibonnaci[i] + valorFibonnaci[i + 1])
    i++
  }
  return valorFibonnaci
}

function verificarValorNaSequencia(valor, sequencia) {
  return sequencia.some((elemento) => elemento === valor)
}

const variavel = parseInt(prompt('Digite um número: '))
const sequenciaFibonacci = gerarSequenciaFibonacci(variavel)
const resultado = verificarValorNaSequencia(variavel, sequenciaFibonacci)

if (resultado) {
  console.log('O valor digitado faz parte da sequência de Fibonacci')
} else {
  console.log('O valor digitado NÃO faz parte da sequência de Fibonacci')
}
