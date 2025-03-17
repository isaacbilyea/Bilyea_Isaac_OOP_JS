import { Media } from '../classes/Media.js';

class Polaroid extends Media {
    constructor(imageFile, caption, filter) {
        super(caption);
        this.imageFile = imageFile;
        this.filter = filter;
        this.element.classList.add('polaroid-card');
    }

    createContent() {
        const img = this.addImage(this.imageFile);
        img.classList.add(this.filter);
        this.addCaption();
        this.addToBoard();
    }
}

export { Polaroid };