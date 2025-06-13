import { context} from "../script.js"
import { HEIGHT, WIDTH } from "./drawfunction.js"
export { transformBlackAndWhite, transformSepia, invertColor }

function transformBlackAndWhite() {
    if (context) {
        const imageData = context.getImageData(0, 0, WIDTH, HEIGHT)
        const data = imageData.data

        for (let i = 0; i < data.length; i += 4) {
            let r = data[i], g = data[i + 1], b = data[i + 2]

            const gray = 0.3 * r + 0.59 * g + 0.11 * b
            data[i] = data[i + 1] = data[i + 2] = gray
        }

        context.putImageData(imageData, 0, 0)
    }
}

function transformSepia() {
    if (context) {
        const imageData = context.getImageData(0, 0, WIDTH, HEIGHT)
        const data = imageData.data

        for (let i = 0; i < data.length; i += 4) {
            let r = data[i], g = data[i + 1], b = data[i + 2]

            data[i] = Math.min(255, 0.393 * r + 0.769 * g + 0.189 * b);
            data[i + 1] = Math.min(255, 0.349 * r + 0.686 * g + 0.168 * b);
            data[i + 2] = Math.min(255, 0.272 * r + 0.534 * g + 0.131 * b);
        }

        context.putImageData(imageData, 0, 0)
    }
}

function invertColor() {
    if (context) {
        const imageData = context.getImageData(0, 0, WIDTH, HEIGHT)
        const data = imageData.data

        for (let i = 0; i < data.length; i += 4) {
            let r = data[i], g = data[i + 1], b = data[i + 2]

            data[i] = 255 - r;
            data[i + 1] = 255 - g;
            data[i + 2] = 255 - b;
        }

        context.putImageData(imageData, 0, 0)
    }
}