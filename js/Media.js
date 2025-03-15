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
            bounds: window,
            onDragStart: () => this.element.classList.add("dragging"),
            onDragEnd: () => this.element.classList.remove("dragging")
        });
    }
}

class Photo extends Media {
    constructor(imageFile, caption, filter) {
        super(caption);
        this.imageFile = imageFile;
        this.filter = filter;
        this.element.classList.add('photo-card');
    }

    createContent() {
        const img = this.addImage(this.imageFile);
        img.classList.add(this.filter);
        this.addCaption();
        this.addToBoard();
    }
}

class Polaroid extends Media {
    constructor(imageFile, caption) {
        super(caption);
        this.imageFile = imageFile;
        this.element.classList.add('polaroid-card');
    }

    createContent() {
        const img = this.addImage(this.imageFile);
        this.addCaption();
        this.addToBoard();
    }
}

class StickyNote extends Media {
    constructor(caption, colour) {
        super(caption);
        this.element.classList.add('sticky-note');
        this.colour = colour;
    }

    createContent() {
        this.addCaption();
        this.addToBoard();
        this.element.style.backgroundColor = this.colour;
    }
}

export { Media, Photo, Polaroid, StickyNote };
