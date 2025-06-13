import { context, canvas } from "../script.js";
import { primaryColor, removeDrawEventListeners } from "./drawfunction.js"
export { enableText, removeTextEvents }

function enableText() {
    removeDrawEventListeners()
    canvas.addEventListener("click", writeText)
}

function writeText(ev) {
    console.log(ev)
    context.fillStyle = primaryColor
    const xPos = ev.offsetX
    const yPos = ev.offsetY
    const textSize = document.getElementById("range").value
    const text = prompt("Insira o Texto: ")
    if (text) {
        context.font = `${textSize}px serif`
        context.fillText(text, xPos, yPos)
    }
}

function removeTextEvents() {
    canvas.removeEventListener("click", writeText)
}