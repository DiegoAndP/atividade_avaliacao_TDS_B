import { context } from "../script.js"
export { importImage }

function importImage() {
    const imagePath = document.querySelector('[data-file="file"]').value
    const image = new Image()
    image.src = imagePath
    image.onload = _ => {
        if (context) {
            context.drawImage(image, 0, 0)
        }
    }
}