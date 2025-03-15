import { addImage } from './add-image.js';
import { addSticker } from './add-sticker.js';

export function modalForm() {

    //VARIABLES
    const modal = document.querySelector('#modals');
    const modalCon = document.querySelector('#modal-con');
    const addMediaBtn = document.querySelector('#add-media-btn');
    const resetMediaBtn = document.querySelector('#reset-media-btn');
    const imageContainer = document.querySelector("#image-container");
    const closeBtn = document.querySelector('#close-modal');
    const mediaTypeBtns = document.querySelectorAll('.media-type-btn');
    const mediaForms = document.querySelectorAll('.media-form, #sticker-form');
    const photoForm = document.querySelector('#photo-form');
    const stickerForm = document.querySelector('#sticker-form');

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
    }

    function outsideModal(e) {
        if (e.target === modal) {
            closeModal();
        }
    }

    function resetBoard() {
        imageContainer.innerHTML = '';
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
        addImage();
        closeModal();
    }

    function stickerSubmit(e) {
        const emoji = e.target.dataset.emoji;
        addSticker(emoji);
        closeModal();
    }

    //EVENT LISTENERS
    addMediaBtn.addEventListener('click', openModal);
    resetMediaBtn.addEventListener('click', resetBoard);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', outsideModal);
    
    mediaTypeBtns.forEach(btn => {
        btn.addEventListener('click', selectMediaType);
    });

    photoForm.addEventListener('submit', photoSubmit);
    stickerForm.addEventListener('click', (e) => {
        if (e.target.classList.contains('sticker-btn')) {
            stickerSubmit(e);
        }
    });
}