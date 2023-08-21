function getFullscreenElement() {
    return document.fullscreenElement
        ||document.webkitfullscreenElement
        ||document.mozFullscreenElement
        ||document.msFullscreenElement;

}



document.addEventListener("click", () => {
    document.documentElement.requestFullscreen().catch((e) => {
        console.log(e);
    });
});

