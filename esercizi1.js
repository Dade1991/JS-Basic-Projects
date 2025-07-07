// Esercizi Funzioni Javascript

// Esercizio 1
// Scrivi una funzione che prenda due parametri, base e altezza, e restituisca l'area del rettangolo corrispondente.

const base = 5
const height = 10

const area = function (base, height) {
  return base * height
}

console.log(`The area is:`, area(base, height))

// Esercizio 2
// Scrivi una funzione che prenda un parametro numero e restituisca true se il numero è pari, altrimenti restituisca false.

const n1 = 1241

const evenNumber = function () {
  if (n1 % 2 === 0) {
    return true
  } else {
    return false
  }
}

console.log(evenNumber())

// Esercizio 3
// Scrivi una funzione che prenda due parametri di tipo stringa e restituisca la loro concatenazione.

const str1 = `ciao`
const str2 = `strunz`

const gluing = function (str1, str2) {
  const strUnion = str1 + ` ` + str2
  return strUnion
}

console.log(gluing(str1, str2))

// Esercizio 5
// Scrivi una funzione che generi un numero casuale compreso tra un valore minimo e un valore massimo.

const minN = 1
const maxN = 10

const spitNumber = function (minN, maxN) {
  return Math.ceil(Math.random() * (maxN - minN + 1))
}

const casualNumber = spitNumber(minN, maxN)

console.log(casualNumber)

// Esercizio 6
// Scrivi una funzione che prenda una parola come parametro e restituisca true se la parola è palindroma, altrimenti restituisca false.

const wordToCheck = `Abba`

const wordChecker = function (word) {
  const preInverter = word.toLowerCase()
  const inverter = preInverter.split("").reverse().join("")
  if (inverter === preInverter) {
    return true
  } else {
    return false
  }
}

console.log(wordChecker(wordToCheck))

// Esercizio 7
// Scrivi una funzione che prenda un array di numeri come parametro e restituisca la somma di tutti gli elementi.

const arrayOfNumbers = [5, 5, 20, 15]

const arraySum = function () {
  let sum = 0
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i]
  }
  return sum
}

console.log(arraySum())

// Esercizio 8
// Scrivi una funzione che prenda un array di numeri come parametro e restituisca un oggetto con le proprietà "massimo" e "minimo" che rappresentano rispettivamente il valore massimo e il valore minimo dell'array.

const arrayOfNumbers2 = [1, 3, 6, 8, 10]

const minAndMaxValues = function (arrayOfNumbers2) {
  const minNumber = Math.min(...arrayOfNumbers2)
  const maxNumber = Math.max(...arrayOfNumbers2)
  return {
    minNumber,
    maxNumber,
  }
}

const results = minAndMaxValues(arrayOfNumbers2)

console.log(results.minNumber)
console.log(results.maxNumber)

// Esercizio 9
// Scrivi una funzione che prenda una stringa come parametro e restituisca il numero di vocali presenti nella stringa.

const vocalsDetector = function (phrase) {
  const lowerCaseIt = phrase.toLowerCase().split("")
  const vocals = [`a`, `e`, `i`, `o`, `u`]
  let count = 0

  for (let i = 0; i < lowerCaseIt.length; i++) {
    if (vocals.includes(lowerCaseIt[i])) {
      count++
    }
  }
  return count
}

const vocalsTOT = vocalsDetector(`ciao`)
console.log(vocalsTOT)

// Esercizio 10
// Scrivi una funzione che prenda un array di numeri come parametro e restituisca la media di tutti gli elementi.

const arrayOfNumbers3 = [3, 7, 4, 2]

const mediaOfParameter = function (arrayOfNumbers3) {
  let sum = 0
  for (let i = 0; i < arrayOfNumbers3.length; i++) {
    sum += arrayOfNumbers3[i]
  }
  return sum / arrayOfNumbers3.length
}

const exercise10FunctionResult = mediaOfParameter(arrayOfNumbers3)

console.log(exercise10FunctionResult)

// Esercizi Arrow Function Javascript

// Esercizio 1
// Scrivi una arrow function che prenda due parametri numerici e restituisca la loro somma.

const sum2 = (n1, n2) => {
  return n1 + n2
}

exercise1ArrowResult = sum2(2, 2)

console.log(exercise1ArrowResult)

// Esercizio 2
// Scrivi una arrow function che prenda un parametro numerico e restituisca il quadrato del numero.

const exponentRatio = 3

const exponentSquared = (number) => {
  return Math.pow(number, exponentRatio)
}

const exercise2ArrowResult = exponentSquared(3)

console.log(exercise2ArrowResult)

// Esercizio 3
// Scrivi una arrow function che prenda un parametro numerico e restituisca true se il numero è positivo, altrimenti restituisca false.

const numberPositive = 5
const numberNegative = -3

const positiveNegativeChecker = (number) => {
  if (number >= +0) {
    return true
  } else {
    return false
  }
}

const exercise3ArrowResult = positiveNegativeChecker(numberNegative)
console.log(exercise3ArrowResult)

// Esercizio 4
// Scrivi una arrow function che prenda due parametri di tipo stringa e restituisca la loro concatenazione.

const otherStr1 = `Porca`
const otherStr2 = `Puttana`

const glueThem = (otherStr1, otherStr2) => {
  return `${otherStr1} ${otherStr2}, sto JS è na merda!`
}

const exercise4ArrowResult = glueThem(otherStr1, otherStr2)

console.log(exercise4ArrowResult)

// Esercizio 5
// Scrivi una arrow function che prenda due parametri numerici, base e altezza, e restituisca l'area del triangolo corrispondente.

const triangleBase = 2
const trinagleHeight = 5

const triangleArea = (base, height) => {
  return (base * height) / 2
}

const exercise5ArrowResult = triangleArea(triangleBase, trinagleHeight)

console.log(exercise5ArrowResult)

// Esercizio 6
// Scrivi una arrow function che prenda una parola come parametro e restituisca true se la parola è palindroma, altrimenti restituisca false.

const wordInQuestion = `RadAr`

const palindromeWord = (wordInQuestion) => {
  const toLower = wordInQuestion.toLowerCase()
  const palindromeChecker = toLower.split("").reverse().join("")
  if (palindromeChecker === toLower) {
    return true
  } else {
    return false
  }
}

const exercise6ArrowResult = palindromeWord(wordInQuestion)

console.log(exercise6ArrowResult)

// Esercizio 7
// Scrivi una arrow function che prenda un parametro numerico e restituisca il cubo del numero.

const cubeExponent = 3

const exponentCube = (number) => {
  return Math.pow(number, cubeExponent)
}

const exercise7ArrowResult = exponentCube(3)

console.log(exercise7ArrowResult)

// Esercizio 8
// Scrivi una arrow function che prenda due parametri numerici, minimo e massimo, e restituisca un numero casuale compreso tra il valore minimo e il valore massimo.

const minNumber2 = 2
const maxNumber2 = 10

const randomNumber = (minNumber2, maxNumber2) => {
  return Math.floor(Math.random() * (maxNumber2 - minNumber2 + 1)) + minNumber2
}

const exercise8ArrowResult = randomNumber(minNumber2, maxNumber2)

console.log(exercise8ArrowResult)

// Esercizio 9
// Scrivi una arrow function che prenda un array di stringhe come parametro e restituisca la concatenazione di tutti gli elementi dell'array.

const arrayOfStrings = [`ciao`, `arrivederci`, `hello`]

const concatString = (arrayOfStrings) => {
  return arrayOfStrings.join(` `)
}

const exercise9ArrowResult = concatString(arrayOfStrings)

console.log(exercise9ArrowResult)

// Esercizio 10
// Scrivi una arrow function che prenda due parametri, una parola e una lunghezza, e restituisca true se la parola è più lunga della lunghezza specificata, altrimenti restituisca false.

const wordTest = `Davide`
const lengthNumber = 7

const wordLength = () => {
  if (wordTest.length >= lengthNumber) {
    return true
  } else {
    return false
  }
}

const exercise10ArrowResult = wordLength(wordTest, lengthNumber)

console.log(exercise10ArrowResult)
