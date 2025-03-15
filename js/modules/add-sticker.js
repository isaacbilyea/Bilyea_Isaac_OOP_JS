export function addSticker(emoji) {
    const imageContainer = document.querySelector("#media-board");
    const stickerElement = document.createElement("div");
    
    stickerElement.classList.add("sticker");
    stickerElement.textContent = emoji;
    imageContainer.appendChild(stickerElement);

    Draggable.create(stickerElement, {
        type: "x,y",
        inertia: true,
        onDragStart: function(){
            this.target.classList.add("dragging");
        },
        onDragEnd: function() {
            this.target.classList.remove("dragging");
        }
    });
}