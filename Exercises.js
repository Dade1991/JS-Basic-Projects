// <!-- Esercizio 1: Somma degli elementi con `for`

// Obiettivo: Calcolare la somma di tutti gli elementi numerici in un array utilizzando un ciclo `for`.

// Istruzioni:
// 1. Crea un array chiamato `numeri` contenente almeno 5 numeri a tua scelta.
// 2. Inizializza una variabile `somma` a 0.
// 3. Utilizza un ciclo `for` per iterare su ogni elemento dell'array `numeri`.
// 4. All'interno del ciclo, aggiungi ogni numero alla variabile `somma`.
// 5. Stampa il valore finale di `somma` nella console.
// */

// Il tuo codice per l'Esercizio 1 qui sotto:

const numeri = [10, 5, 25, 0, 12]

let somma = 0

for (let i = 0; i < numeri.length; i++) {
  somma = somma + numeri[i]
  console.log(somma)
}

/*
Esercizio 2: Numeri pari con `forEach` e `if`

Obiettivo: Trovare e stampare tutti i numeri pari da un array utilizzando `forEach` e una condizione `if`.

Istruzioni:
1. Crea un array chiamato `numeriMisti` contenente una combinazione di numeri pari e dispari.
2. Utilizza il metodo `forEach` per iterare su ogni elemento dell'array `numeriMisti`.
3. All'interno del `forEach`, usa una condizione `if` per verificare se il numero corrente è pari (suggerimento: usa l'operatore modulo `%`).
4. Se il numero è pari, stampalo nella console.
*/

// Il tuo codice per l'Esercizio 2 qui sotto:

const numeriMisti = [5, 3, 10, 7, 12, 4]

numeriMisti.forEach((numero) => {
  if (numero % 2 === 0) {
    console.log(numero)
  }
})

/*
Esercizio 3: Trova la parola più lunga con `for` e `if`

Obiettivo: Identificare e stampare la parola più lunga da un array di stringhe.

Istruzioni:
1. Crea un array chiamato `parole` contenente diverse parole di lunghezze diverse.
2. Inizializza una variabile `parolaPiuLunga` a una stringa vuota o alla prima parola dell'array.
3. Utilizza un ciclo `for` per iterare su ogni parola nell'array `parole`.
4. All'interno del ciclo, usa una condizione `if` per confrontare la lunghezza della parola corrente con la lunghezza di `parolaPiuLunga`.
5. Se la parola corrente è più lunga, aggiorna `parolaPiuLunga` con questa parola.
6. Stampa il valore finale di `parolaPiuLunga` nella console.
*/

// Il tuo codice per l'Esercizio 3 qui sotto:

const parole = [`ciao`, `merda`, `salvini`, `dioporco`, `asdrubale`]

let parolaPiuLunga = parole[0]

for (let i = 0; i < parole.length; i++) {
  if (parole[i].length > parolaPiuLunga.length) {
    parolaPiuLunga = parole[i]
  }
}

console.log(parolaPiuLunga)

/*
Esercizio 4: Filtra numeri maggiori di un valore con `forEach` e `if`

Obiettivo: Creare un nuovo array contenente solo i numeri maggiori di un certo valore.

Istruzioni:
1. Crea un array chiamato `temperature` con alcuni valori numerici.
2. Definisci una variabile `soglia` con un valore numerico a tua scelta (es. 20).
3. Inizializza un array vuoto chiamato `temperatureAlte`.
4. Utilizza il metodo `forEach` per iterare su ogni temperatura in `temperature`.
5. All'interno del `forEach`, usa una condizione `if` per verificare se la temperatura corrente è maggiore della `soglia`.
6. Se la condizione è vera, aggiungi la temperatura all'array `temperatureAlte` usando `push()`.
7. Stampa l'array `temperatureAlte` nella console.
*/

// Il tuo codice per l'Esercizio 4 qui sotto:

const temperature = [20, 40, 60, 45, 70]
const soglia = 43
let temperatureAlte = []
let temperatureBasse = []

temperature.forEach((temperatura) => {
  if (temperatura >= soglia) {
    temperatureAlte.push(temperatura)
  } else {
    temperatureBasse.push(temperatura)
  }
})

console.log(`temperatureAlte = `, temperatureAlte)
console.log(`temperatureBasse = `, temperatureBasse)

/*
Esercizio 5: Inverti un array con `for`

Obiettivo: Creare un nuovo array che sia l'inverso dell'array originale, utilizzando un ciclo `for`.

Istruzioni:
1. Crea un array chiamato `elementi` con alcuni elementi a tua scelta (numeri o stringhe).
2. Inizializza un array vuoto chiamato `elementiInvertiti`.
3. Utilizza un ciclo `for` che parta dall'ultimo elemento dell'array `elementi` e vada a ritroso fino al primo.
4. All'interno del ciclo, aggiungi ogni elemento (partendo dalla fine) all'array `elementiInvertiti` usando `push()`.
5. Stampa l'array `elementiInvertiti` nella console.
*/

const elementi = [55, `strunz`, 43, `ayo`, `vecio`, 69]
const elementiInvertiti = []
const reversed = elementi.reverse()

// console.log(reversed)

for (let i = 0; i < reversed.length; i++) {
  elementiInvertiti.push(reversed[i])
}
console.log(elementiInvertiti)
