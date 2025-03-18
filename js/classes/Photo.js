import { Media } from '../classes/Media.js';

class Photo extends Media {
    constructor(imageFile, caption, date, className) {
        super(caption, className);
        this.imageFile = imageFile;
        this.element.classList.add('photo-card');
        this.date = date;
    }

    createContent() {
        this.addImage(this.imageFile);
        this.addPhotoPlaque();
        super.addToBoard();
    }

    addPhotoPlaque() {
        const photoPlaque = document.createElement('div');
        photoPlaque.classList.add('photo-plaque');
        
        const caption = document.createElement("p");
        caption.classList.add('caption');
        caption.textContent = this.caption;
        photoPlaque.appendChild(caption);

        const date = document.createElement("p");
        date.classList.add('date');
        date.textContent = this.formatDate();
        photoPlaque.appendChild(date);

        this.element.appendChild(photoPlaque);
    }

    formatDate() {
        return new Date(this.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

}

export { Photo };