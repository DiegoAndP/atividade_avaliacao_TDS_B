import { context, canvas } from "../script.js";
import { removeTextEvents } from "./text.js";
export { clearBoard, enableDraw, erase, changeColor, setPencilSize, removeDrawEventListeners, primaryColor, WIDTH, HEIGHT}

const WIDTH = 800
const HEIGHT = 600

let isDrawing = false;
let isErasing = false;
let primaryColor = "rgb(0,0,0)"
let pencilSize = 10

function clearBoard() {
    context.fillStyle = "rgb(255,255,255)"
    context.fillRect(0, 0, WIDTH, HEIGHT)
}

function enableDraw() {
    isErasing = false
    removeTextEvents()
    canvas.addEventListener("mousedown", mousedownDraw)
    //ev.preventDefault()
    /*console.log(ev)
    console.log(ev.offsetX)
    console.log(ev.offsetY)
    console.log(ev.shiftKey)
    console.log(ev.type)
    */
    canvas.addEventListener("mousemove", mousemoveDraw)
    canvas.addEventListener("mouseup", cancelDrawing)
    canvas.addEventListener("mouseleave", cancelDrawing)
}

function mousedownDraw(ev) {
    if (context) {
        context.fillStyle = primaryColor
        isDrawing = true
        draw(ev)
    }
}

function draw(ev) {
    if (isDrawing) {
        context.fillStyle = isErasing ? "white" : primaryColor;
        context.fillRect(ev.offsetX, ev.offsetY, pencilSize, pencilSize);
    }
}
function cancelDrawing() {
    isDrawing = false
}

function mousemoveDraw(ev) {
    if (isDrawing) {
        draw(ev)
    }

}

function erase() {
    isErasing = true 
}


function removeDrawEventListeners() {
    //remove all draw event listeners from canvas
    isDrawing = false
    canvas.removeEventListener("mousedown", mousedownDraw);
    canvas.removeEventListener("mousemove", mousemoveDraw);
    canvas.removeEventListener("mouseup", cancelDrawing);
    canvas.removeEventListener("mouseleave", cancelDrawing);
}

function changeColor(ev) {
    primaryColor = ev.target.value
}

function setPencilSize(ev) {
    //console.log(ev.target.value)
    const newPencilSize = ev.target.value
    pencilSize = newPencilSize
    document.querySelector(".options__range p").textContent = newPencilSize
}