function playAudio() {
    var audio = document.getElementById("backgroundMusic");
    audio.addEventListener("ended", function() {
      audio.currentTime = 0; // Reset the playback position to the beginning
      audio.play(); // Start playing again
    });
    audio.play(); // Start playing the audio
  }
  