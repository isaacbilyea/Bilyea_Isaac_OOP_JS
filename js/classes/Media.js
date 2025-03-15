class Media {
    constructor(caption) {
        this.container = document.querySelector("#media-board");
        this.element = document.createElement("div");
        this.caption = caption;
    }

    addToBoard() {
        this.container.appendChild(this.element);
        this.makeDraggable();
    }

    addImage(imageFile) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(imageFile);
        img.style.display = "block";
        this.element.appendChild(img);
        return img;
    }

    addCaption() {
        const caption = document.createElement("p");
        caption.textContent = this.caption;
        this.element.appendChild(caption);
    }

    makeDraggable() {
        Draggable.create(this.element, {
            type: "x,y",
            inertia: true,
            bounds: this.container,
            onDragStart: () => this.element.classList.add("dragging"),
            onDragEnd: () => this.element.classList.remove("dragging")
        });
    }
}

export { Media };
