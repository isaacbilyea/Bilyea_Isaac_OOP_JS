import { Media } from '../classes/Media.js';

class Polaroid extends Media {
    constructor(imageFile, caption, filter, className) {
        super(caption, className);
        this.imageFile = imageFile;
        this.filter = filter;
    }

    createContent() {
        const img = this.addImage(this.imageFile);
        img.classList.add(this.filter);
        super.createContent();
    }
}

export { Polaroid };