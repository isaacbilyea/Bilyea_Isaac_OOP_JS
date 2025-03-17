import { Media } from './Media.js';

class Sticker extends Media {
    constructor(emoji) {
        super('');
        this.emoji = emoji;
        this.element.classList.add('sticker');
    }

    createContent() {
        this.element.textContent = this.emoji;
        this.addToBoard();
    }
}

export { Sticker };
