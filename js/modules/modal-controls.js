import { closeModal } from "./modal-close.js";
import { animateModalOpen } from './modal-gsap.js';

export function modalControls() {

    //VARIABLES
    const modal = document.querySelector('#modal');
    const mediaBoard = document.querySelector("#media-board");
    const mediaForms = document.querySelectorAll('.media-form, #sticker-form');
    const addMediaBtn = document.querySelector('#add-media-btn');
    const resetMediaBtn = document.querySelector('#reset-media-btn');
    const mediaTypeBtns = document.querySelectorAll('.media-type-btn');
    const closeBtn = document.querySelector('#close-modal');
    const controls = document.querySelector('#controls-con');

    //FUNCTIONS
    function openModal() {
        hideAllForms();
        modal.style.display = 'block';
        animateModalOpen();
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

    Draggable.create(controls, {
        type: "x,y",
        inertia: true,
        bounds: window,
        onDragStart: () => {
            controls.classList.add("dragging")
        },
        onDragEnd: () => {
            controls.classList.remove("dragging")
        }
    });

    window.addEventListener("resize", () => {
        Draggable.get(controls).applyBounds();
    });

    //EVENT LISTENERS
    addMediaBtn.addEventListener('click', openModal);
    resetMediaBtn.addEventListener('click', resetBoard);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', outsideModal);

    mediaTypeBtns.forEach(btn => {
        btn.addEventListener('click', selectMediaType);
    });
}