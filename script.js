// dynamically switch stylesheet based on mobile/desktop
function updateStylesheet() {
    var link = document.getElementById("stylesheet");
    if (window.innerWidth <= 768) {
        link.href = "stylesheets/mobile.css"; // Load mobile styles
    } else {
        link.href = "stylesheets/style.css"; // Load desktop styles
    }
}

// run on page load
updateStylesheet();

// update on resize
window.addEventListener("resize", updateStylesheet);

