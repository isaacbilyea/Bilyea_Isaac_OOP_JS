import { Media } from './Media.js';

class Polaroid extends Media {
    constructor(imageFile, caption) {
        super(caption);
        this.imageFile = imageFile;
        this.element.classList.add('image-card');
    }

    createContent() {
        const img = this.addImage(this.imageFile);
        this.addCaption();
        this.addToBoard();
    }
}

export { Polaroid };