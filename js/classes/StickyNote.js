import { Media } from '../classes/Media.js';

class StickyNote extends Media {
    constructor(caption, colour, className) {
        super(caption, className);
        this.colour = colour;
    }

    createContent() {
        this.element.style.backgroundColor = this.colour;
        super.createContent(); 
    }
}

export { StickyNote };