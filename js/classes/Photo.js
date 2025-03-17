import { Media } from '../classes/Media.js';

class Photo extends Media {
    constructor(imageFile, caption, date) {
        super(caption);
        this.imageFile = imageFile;
        this.element.classList.add('photo-card');
        this.date = date;
    }

    createContent() {
        const img = this.addImage(this.imageFile);
        
        const photoPlaque = document.createElement('div');
        photoPlaque.classList.add('photo-plaque');
        
        const caption = document.createElement("p");
        caption.classList.add('caption');
        caption.textContent = this.caption;
        photoPlaque.appendChild(caption);

        const date = document.createElement("p");
        date.classList.add('date');
        const formattedDate = new Date(this.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        date.textContent = formattedDate;
        photoPlaque.appendChild(date);

        this.element.appendChild(photoPlaque);
        
        this.addToBoard();
    }
}

export { Photo };