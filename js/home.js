const imageInput = document.querySelector("#image-input");
const imageContainer = document.querySelector("#image-container");

function showImage(e) {
    const file = e.target.files[0];
    const img = document.createElement("img");
    
    img.src = URL.createObjectURL(file);
    img.style.display = "block";
    imageContainer.appendChild(img);
}

imageInput.addEventListener("change", showImage);

