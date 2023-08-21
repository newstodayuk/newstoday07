window.addEventListener('DOMContentLoaded', function() {
    var popupElement = document.getElementById('poppupp');
    setTimeout(function() {
        popupElement.style.top = '50px';
        popupElement.style.opacity = '1';
        popupElement.style.visibility = 'visible';
    }, 10000);
});