import { animateModalClose } from "./modal-gsap.js";

export function closeModal() {

    const modalCon = document.querySelector('#modal-con');
    const mediaTypeBtns = document.querySelectorAll('.media-type-btn');
    const mediaForms = document.querySelectorAll('.media-form, #sticker-form');

    mediaForms.forEach(form => {
        form.style.display = 'none'; 
        form.classList.remove('active');
    });
    
    modalCon.classList.remove('active');
    mediaTypeBtns.forEach(btn => btn.classList.remove('active'));

    animateModalClose();
}