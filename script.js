const modal = document.querySelector(".modal-container");
const trigger = document.querySelector(".trigger");

const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal-container");
}
// const flag=false;

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
        // flag=!flag;
    }
}


trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
// if(modal.classList=="show-modal"){
//     body.addEventListener("click", toggleModal);
// }
body.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


