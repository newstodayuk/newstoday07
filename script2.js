window.addEventListener('load', function() {
    var progressBarInner = document.getElementById('progress-bar-inner');
    var progressBarText = document.getElementById('progress-bar-text');

    var width = 0;
    var interval = setInterval(function() {
        width += Math.random() * 10; // Increase progress randomly
        width = Math.min(width, 100); // Ensure progress doesn't exceed 100
        progressBarInner.style.width = width + '%';
        progressBarText.innerHTML = Math.round(width) + '%';

        if (width >= 100) {
            clearInterval(interval);
            // Hide the loader
            document.getElementById('loader-container').style.display = 'none';
        }
    }, 100);
});
