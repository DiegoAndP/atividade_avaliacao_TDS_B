import { clearBoard, enableDraw, setPencilSize, changeColor, erase } from "./js/drawfunction.js"
import { invertColor, transformBlackAndWhite, transformSepia } from "./js/filters.js"
import {importImage} from "./js/imageFile.js"
import { enableText } from "./js/text.js"


export const canvas = document.querySelector(".canvas__element")
export const context = canvas.getContext("2d", { willReadFrequently: true })

console.log(typeof(context))

export const openImage = document.querySelector('[data-file="import"]')
export const colorWheel = document.getElementById("color")
export const range = document.querySelector(".options__range")
export const circleTool = document.getElementById("circulo")
//export const traceTool = document.getElementById("linha")
//Filter buttons
export const blackAndWhite = document.querySelector('[data-filter="black_white"]')
export const sepia = document.querySelector('[data-filter="sepia"]')
export const invert = document.querySelector('[data-filter="invert_color"]')

clearBoard()

const tools = document.querySelectorAll(".tool")
console.log(tools)
const pencil = tools[0]
const eraser = tools[1]
const text = document.querySelector('[data-tool="text"]')
const cleanScreen = tools[3]

export const paleta = document.querySelector(".column__color_list")

pencil.addEventListener("click", enableDraw)
eraser.addEventListener("click", erase)
text.addEventListener("click", enableText)
cleanScreen.addEventListener("click", clearBoard)
colorWheel.addEventListener("change", changeColor)
range.addEventListener("change", setPencilSize)
openImage.addEventListener("click", importImage)

blackAndWhite.addEventListener("click", transformBlackAndWhite)
sepia.addEventListener("click", transformSepia)
invert.addEventListener("click", invertColor)

//linha.addEventListener("click",eventTraceHandler)

//enableDraw(canvas, context)
