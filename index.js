const popup = document.querySelector('.popup1');
    
window.addEventListener('load' ,() => {
    popup.classList.add('showPopup1');
    popup.childNodes[1].classList.add('showPopup1');
})