export function animateModalOpen() {
    const modalCon = document.querySelector('#modal-con');
    
    gsap.fromTo(modalCon, 
        { 
            scale: 0.8, 
            opacity: 1
        },
        { 
            scale: 1, 
            opacity: 1, 
            duration: 0.2, 
            ease: "elastic.out(1,0.5)" 
        }
    );
}

export function animateModalClose() {
    const modalCon = document.querySelector('#modal-con');
    
    gsap.to(modalCon, {
        scale: 0.8,
        opacity: 0,
        duration: 0.1,
        ease: "power2.out",
        onComplete: () => {
            modal.style.display = 'none';
        }
    });
}