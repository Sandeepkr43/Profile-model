const modal = document.querySelector(".modal")
const overlay = documnet.querySelector('.overlay');

function openModal() {
    console.log('Modal is open');
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

function closeModal() {
    console.log("Modal is closed");
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
};