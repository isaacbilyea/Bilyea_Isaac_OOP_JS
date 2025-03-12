export function modalForm() {

    const modal = document.querySelector('#modals');
    const modalCon = document.querySelector('#modal-con');
    const addMediaBtn = document.querySelector('#add-media-btn');
    const closeBtn = document.querySelector('#close-modal');
    const mediaTypeBtns = document.querySelectorAll('.media-type-btn');


    function openModal() {
        modal.style.display = 'block';
        modalCon.classList.add('active');
    }

    function closeModal() {
        modalCon.classList.remove('active');
        modal.style.display = 'none';
    }

    function selectModal(e) {
        
        const clickedBtn = e.currentTarget;
    
        mediaTypeBtns.forEach(btn => 
            btn.classList.remove('active')
        );
        
        clickedBtn.classList.add('active');
    }

    addMediaBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    
    mediaTypeBtns.forEach(btn => {
        btn.addEventListener('click', selectModal);
    });

}