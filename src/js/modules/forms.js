import { Photo } from '../classes/Photo.js';
import { Polaroid } from '../classes/Polaroid.js';
import { StickyNote } from '../classes/StickyNote.js';
import { Sticker } from '../classes/Sticker.js';

import { closeModal } from './modal-close.js';

export function forms() {

    //VARIABLES
    const photoForm = document.querySelector('#photo-form');
    const polaroidForm = document.querySelector('#polaroid-form');
    const noteForm = document.querySelector('#note-form');
    const stickerForm = document.querySelector('#sticker-form');

    //FUNCTIONS
    function photoSubmit(e) {
        e.preventDefault();
        const imageInput = photoForm.querySelector(".image-input");
        const captionInput = photoForm.querySelector(".caption-input");
        const dateInput = photoForm.querySelector("#photo-date");

        const photo = new Photo (
            imageInput.files[0],
            captionInput.value,
            dateInput.value,
            'photo-card'
        );

        photo.createContent();
        closeModal();
        photoForm.reset();
    }

    function polaroidSubmit(e) {
        e.preventDefault();
        const imageInput = polaroidForm.querySelector(".image-input");
        const captionInput = polaroidForm.querySelector(".caption-input");
        const filterSelect = polaroidForm.querySelector("#filter");

        const polaroid = new Polaroid (
            imageInput.files[0],
            captionInput.value,
            filterSelect.value,
            'polaroid-card'
        );

        polaroid.createContent();
        closeModal();
        polaroidForm.reset();
    }

    function noteSubmit(e) {
        e.preventDefault();
        const captionInput = noteForm.querySelector(".caption-input");
        const colourSelect = noteForm.querySelector("#note-colour");

        const stickyNote = new StickyNote (
            captionInput.value,
            colourSelect.value,
            'sticky-note'
        );
        
        stickyNote.createContent();
        closeModal();
        noteForm.reset();
    }

    function stickerSubmit(e) {
        const emoji = e.target.dataset.emoji;
        const sticker = new Sticker(emoji, 'sticker'); 
        sticker.createContent();
        closeModal();
    }

    //EVENT LISTENERS
    photoForm.addEventListener('submit', photoSubmit);
    polaroidForm.addEventListener('submit', polaroidSubmit);
    noteForm.addEventListener('submit', noteSubmit);
    stickerForm.addEventListener('click', stickerSubmit);
}