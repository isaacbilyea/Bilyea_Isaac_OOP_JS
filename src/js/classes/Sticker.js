import { Media } from './Media.js';

class Sticker extends Media {
    constructor(emoji, className) {
        super('', className);
        this.emoji = emoji;
    }

    createContent() {
        this.element.textContent = this.emoji;
        this.addToBoard();
    }

    makeDraggable() {
        Draggable.create(this.element, {
            type: "x,y",
            inertia: true,
            bounds: window,
            onDragStart: () => {
                this.element.classList.add("dragging");
                this.element.style.zIndex = '2000';
            },
            onDragEnd: () => {
                this.element.classList.remove("dragging");
            }
        });
    }
}

export { Sticker };