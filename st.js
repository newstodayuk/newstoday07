function showPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popupp-containerr").style.display = "block";
}

function hidePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popupp-containerr").style.display = "none";

  setTimeout(function() {
      showPopup();
  }, 4000);
}

setTimeout(function() {
  showPopup();
}, 4000);