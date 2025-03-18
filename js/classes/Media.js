class Media {
    constructor(caption, className) {
        this.container = document.querySelector("#media-board");
        this.element = document.createElement("div");
        this.caption = caption;
        this.className = className;
        this.element.classList.add(className);
    }

    addToBoard() {
        this.container.appendChild(this.element);
        this.makeDraggable();
    }

    addImage(imageFile) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(imageFile);
        img.alt = this.caption;
        img.style.display = "block";
        this.element.appendChild(img);
        return img;
    }

    addCaption() {
        const caption = document.createElement("p");
        caption.classList.add('caption');
        caption.textContent = this.caption;
        this.element.appendChild(caption);
    }

    createContent() {
        this.addCaption();
        this.addToBoard();
    }

    makeDraggable() {
        Draggable.create(this.element, {
            type: "x,y",
            inertia: true,
            bounds: window, 
            onDragStart: () => {
                this.element.classList.add("dragging");
            },
            onDragEnd: () => {
                this.element.classList.remove("dragging");
            }
        });
    
        window.addEventListener("resize", () => {
            Draggable.get(this.element).applyBounds();
        });
    }
}

export { Media };
