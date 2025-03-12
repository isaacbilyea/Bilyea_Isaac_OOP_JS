export function createCard() {

    //VARIABLES
    const imageInput = document.querySelector("#image-input");
    const captionInput = document.querySelector("#caption-input");
    const filterSelect = document.querySelector("#filter");
    const imageContainer = document.querySelector("#image-container");

    gsap.registerPlugin(Draggable);

    //FUNCTIONS
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

        const selectedFilter = filterSelect.value;
        if (selectedFilter !== "") {
            img.classList.add(selectedFilter);
        }

        Draggable.create(imageCard, {
            type: "x,y",
            inertia: true,
            bounds: imageContainer,
            onDragStart: function(){
                this.target.classList.add("dragging");
            },
            onDragEnd: function() {
                this.target.classList.remove("dragging");
            }
        });
    }

}