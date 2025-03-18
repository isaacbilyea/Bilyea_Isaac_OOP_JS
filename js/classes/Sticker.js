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
}

export { Sticker };