let startTime // tiene traccia dello START dell'orologio
let stopWatchInterval // tiene traccia dell'INTERVALLO
let elapsedPausedTime = 0 // tiene traccia del tempo trascorso quando messo in pausa

const startWatch = () => {
  if (!stopWatchInterval) {
    startTime = new date().getTime() - elapsedPausedTime // ottiene l'ora di inizio sottraendo il tempo di pausa trascorso dell'ora corrente
    stopWatchInterval = setInterval(updateStopwatch, 1000) // update ogni secondo
  }
}
startWatch()

const stopWatch = () => {
  clearInterval(stopWatchInterval)
}
