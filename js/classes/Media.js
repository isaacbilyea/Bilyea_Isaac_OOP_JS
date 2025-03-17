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
        caption.classList.add('caption');
        caption.textContent = this.caption;
        this.element.appendChild(caption);
    }

    addDate() {
        const date = document.createElement("p");
        date.classList.add('date');

        const formattedDate = new Date(this.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        
        date.textContent = formattedDate;
        this.element.appendChild(date);
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
