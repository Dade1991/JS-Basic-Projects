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
  const count = 0

  for (let i = 0; i < lowerCaseIt.length; i++) {
    if (i.includes(vocals)) {
      count++
    }
  }
  return count
}

const vocalsTOT = vocalsDetector(`ciao`)
console.log(vocalsTOT)
