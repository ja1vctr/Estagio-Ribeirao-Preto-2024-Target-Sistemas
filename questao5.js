function inverterString(str) {
  const caracteres = str.split('') // Divide a string em um array de caracteres
  let caracteresInvertidos = [] // Array para receber os caracteres invertidos
  let x = 0 // Variável de controle do loop
  while (x <= caracteres.length) {
    caracteresInvertidos.push(caracteres[caracteres.length - x])
    x = x + 1
  }
  const stringInvertida = caracteresInvertidos.join('') // Junta os caracteres invertidos em uma nova string
  return stringInvertida
}

const stringOriginal = 'Olá mundo!'
const stringInvertida = inverterString(stringOriginal)

console.log('String original:', stringOriginal)
console.log('String invertida:', stringInvertida)
