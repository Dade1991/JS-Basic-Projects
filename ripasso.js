let counter = 0

do {
  console.log(`valore di Counter (do while)`, counter)
  counter++
} while (counter < 10)

for (let count = 0; counter < 10; counter++) {
  if (counter === 5) break
  console.log(`valore di Counter (break)`, counter)
}

for (let count = 0; counter < 10; counter++) {
  if (counter === 6) continue
  console.log(`valore di Counter (break)`, counter)
}

function getHero() {
  return `Batman`
}
console.log(getHero())

let alterEgo = `Bruce Wayne`

function getAlterEgo() {
  return `Batman is ${alterEgo}`
}

console.log(getAlterEgo())
