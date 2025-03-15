import { Media } from './Media.js';

class Photo extends Media {
    constructor(imageFile, caption, filter) {
        super(caption);
        this.imageFile = imageFile;
        this.filter = filter;
        this.element.classList.add('image-card');
    }

    createContent() {
        const img = this.addImage(this.imageFile);
        img.classList.add(this.filter);
        this.addCaption();
        this.addToBoard();
    }
}

export { Photo };