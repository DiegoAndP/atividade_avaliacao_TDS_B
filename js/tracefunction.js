import { removeDrawEventListeners } from "./drawfunction.js"
import { context, canvas } from "../script.js"

let isTracing = false
const pathList = new Array()

/*
    Função principal para lidar 
*/
function eventTraceHandler() {
    isTracing = true
    // isDrawing = false
    removeDrawEventListeners()
    canvas.addEventListener("click", addPositionToList)
    canvas.addEventListener("contextmenu", drawLines)
}

function addPositionToList(ev) {
    if (ev) {
        pathList.push([ev.offsetX, ev.offsetY])
    }
    console.log(pathList)
}

function drawLines(ev) {
    //console.log(ev.button)
    ev.preventDefault()
    if (pathList[1] && isTracing) {
        const size = pathList.length
        const firstPath = pathList[0]
        context.moveTo(firstPath[0], firstPath[1]);
        console.info(firstPath[0], firstPath[1])
        for (let i = 1; i < size; i++) {
            const line = pathList[i]
            context.lineTo(line[0], line[1]);
        }
        context.stroke();
        
        clearPathList()
    }
    else {
        alert("Selecione ao menos dois pontos para gerar a linha.")
        clearPathList()
    }
}

function clearPathList() {
    const size = pathList.length
    pathList.splice(0, size)
    console.log(pathList)
}


function removeTraceEventListerners() {
    isTracing = false
    canvas.removeEventListener("click", addPositionToList)
    canvas.removeEventListener("click", drawLines)

}