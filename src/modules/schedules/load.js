import { hoursLoad } from "../form/hours-load.js"


const selectedDate = document.getElementById("date")
export function scheduleDay(){
    // Obtem a data do input.
    const date = selectedDate.value


    // Renderiza as horas disponiveis.
    hoursLoad( { date } )
}