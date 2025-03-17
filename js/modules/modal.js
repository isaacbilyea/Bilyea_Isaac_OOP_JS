import { Media, Photo, Polaroid, StickyNote } from '../Media.js';
import { addSticker } from './add-sticker.js';

export function modalForm() {

    //VARIABLES
    const modal = document.querySelector('#modal');
    const modalCon = document.querySelector('#modal-con');
    const addMediaBtn = document.querySelector('#add-media-btn');
    const resetMediaBtn = document.querySelector('#reset-media-btn');
    const mediaBoard = document.querySelector("#media-board");
    const closeBtn = document.querySelector('#close-modal');
    const mediaTypeBtns = document.querySelectorAll('.media-type-btn');
    const mediaForms = document.querySelectorAll('.media-form, #sticker-form');
    const photoForm = document.querySelector('#photo-form');
    const polaroidForm = document.querySelector('#polaroid-form');
    const noteForm = document.querySelector('#note-form');
    const stickerForm = document.querySelector('#sticker-form');
    const controls = document.querySelector('#controls-con');

    //FUNCTIONS
    function openModal() {
        hideAllForms();
        modal.style.display = 'block';
        modalCon.classList.add('active');
    }

    function closeModal() {
        hideAllForms();
        modalCon.classList.remove('active');
        modal.style.display = 'none';
        mediaTypeBtns.forEach(btn => btn.classList.remove('active'));
    }

    function outsideModal(e) {
        if (e.target === modal) {
            closeModal();
        }
    }

    function resetBoard() {
        mediaBoard.innerHTML = '';
    }

    function hideAllForms() {
        mediaForms.forEach(form => {
            form.style.display = 'none'; 
            form.classList.remove('active');
        });
    }

    function showSelectedForm(type) {
        hideAllForms();
        const selectedForm = document.querySelector(`#${type}-form`);
        selectedForm.style.display = 'flex';
        selectedForm.classList.add('active');
    }

    function selectMediaType(e) {
        const clickedBtn = e.currentTarget;
        const mediaType = clickedBtn.dataset.type;
        
        mediaTypeBtns.forEach(btn => btn.classList.remove('active'));
        clickedBtn.classList.add('active');
        
        showSelectedForm(mediaType);
    }

    function photoSubmit(e) {
        e.preventDefault();
        const imageInput = photoForm.querySelector(".image-input");
        const captionInput = photoForm.querySelector(".caption-input");
        const dateInput = photoForm.querySelector("#photo-date");

        if (!imageInput.files[0]) return;

        const photo = new Photo (
            imageInput.files[0],
            captionInput.value,
            dateInput.value
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

        if (!imageInput.files[0]) return;

        const polaroid = new Polaroid (
            imageInput.files[0],
            captionInput.value,
            filterSelect.value
        );
        polaroid.createContent();
        closeModal();
        polaroidForm.reset();
    }

    function noteSubmit(e) {
        e.preventDefault();
        const captionInput = noteForm.querySelector(".caption-input");
        const colourSelect = noteForm.querySelector("#note-colour");

        const stickyNote = new StickyNote(
            captionInput.value,
            colourSelect.value
        );
        stickyNote.createContent();
        closeModal();
        noteForm.reset();
    }

    function stickerSubmit(e) {
        const emoji = e.target.dataset.emoji;
        addSticker(emoji);
        closeModal();
    }

    Draggable.create(controls, {
        type: "x,y",
        inertia: true,
        bounds: window,
        onDragStart: () => controls.classList.add("dragging"),
        onDragEnd: () => controls.classList.remove("dragging")
    });
    

    //EVENT LISTENERS
    addMediaBtn.addEventListener('click', openModal);
    resetMediaBtn.addEventListener('click', resetBoard);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', outsideModal);
    
    mediaTypeBtns.forEach(btn => {
        btn.addEventListener('click', selectMediaType);
    });

    window.addEventListener("resize", () => {
        Draggable.get(controls).applyBounds();
    });

    photoForm.addEventListener('submit', photoSubmit);
    polaroidForm.addEventListener('submit', polaroidSubmit);
    noteForm.addEventListener('submit', noteSubmit);
    stickerForm.addEventListener('click', (e) => {
        if (e.target.classList.contains('sticker-btn')) {
            stickerSubmit(e);
        }
    });
}