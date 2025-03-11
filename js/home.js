const imageInput = document.querySelector("#image-input");
const captionInput = document.querySelector("#caption-input");
const submitButton = document.querySelector("#submit-button");
const imageContainer = document.querySelector("#image-container");

function addImage() {
    const file = imageInput.files[0];
    const img = document.createElement("img");
    const caption = document.createElement("p");
    const imageCard = document.createElement("div");
    
    img.src = URL.createObjectURL(file);
    img.style.display = "block";

    caption.textContent = captionInput.value;

    imageCard.classList.add("image-card");

    imageCard.appendChild(img);
    imageCard.appendChild(caption);  
    imageContainer.appendChild(imageCard);

    Draggable.create(imageCard, {
        type: "x,y",
        inertia: true,
        bounds: window,
    });
}

submitButton.addEventListener("click", addImage);

gsap.registerPlugin(Draggable);