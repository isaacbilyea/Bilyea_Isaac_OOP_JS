import { Media } from '../classes/Media.js';

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

export { StickyNote };