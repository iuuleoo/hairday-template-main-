import { scheduleDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"
const periods = document.querySelectorAll(".period")



// Gera evento click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {

  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li")

      // Pega o id do agendamento para remover.
      const { id } = item.dataset

    if (id) {
      const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")
      
      if (isConfirm) {
        await scheduleCancel({ id })
        scheduleDay()
      }
    }
    }
  })
})
