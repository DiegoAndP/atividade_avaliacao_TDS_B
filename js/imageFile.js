import { context } from "../script.js"
export { importImage }

function importImage() {
    const fileInput = document.querySelector('[data-file="file"]');
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        const image = new Image();
        image.onload = function() {
            if (context) {
                context.drawImage(image, 0, 0);
            }
        };
        image.src = event.target.result;
    };
    reader.readAsDataURL(file);
}