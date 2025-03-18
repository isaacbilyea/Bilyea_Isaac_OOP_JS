export function closeModal() {

    const modal = document.querySelector('#modal');
    const modalCon = document.querySelector('#modal-con');
    const mediaTypeBtns = document.querySelectorAll('.media-type-btn');
    const mediaForms = document.querySelectorAll('.media-form, #sticker-form');

    mediaForms.forEach(form => {
        form.style.display = 'none'; 
        form.classList.remove('active');
    });

    modalCon.classList.remove('active');
    modal.style.display = 'none';
    mediaTypeBtns.forEach(btn => btn.classList.remove('active'));
}