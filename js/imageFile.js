import { context, canvas } from "../script.js"
export { importImage, saveImage }

function importImage() {
    const fileInput = document.querySelector('[data-file="file"]');
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
        const image = new Image();
        image.onload = function () {
            if (context) {
            // Calculate scale to fit image within 800x800 while preserving aspect ratio
            const maxWidth = 800;
            const maxHeight = 600;
            let width = image.width;
            let height = image.height;

            const widthRatio = maxWidth / width;
            const heightRatio = maxHeight / height;
            const scale = Math.min(widthRatio, heightRatio, 1); // Don't upscale

            const drawWidth = width * scale;
            const drawHeight = height * scale;

            // Optionally clear canvas before drawing
            //context.clearRect(0, 0, canvas.width, canvas.height);

            // Center the image on the canvas
            const x = (canvas.width - drawWidth) / 2;
            const y = (canvas.height - drawHeight) / 2;

            context.drawImage(image, x, y, drawWidth, drawHeight);
            }
        };
        image.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

function saveImage() {
    if (context) {
        const image = canvas.toDataURL("image/png").replace("image/url", "image/octet-stream")

        window.location.href= image
    }
}