// dynamically switch stylesheet based on mobile/desktop
function updateStylesheet() {
    var link = document.getElementById("stylesheet");
    if (window.innerWidth <= 768) {
        link.href = "../stylesheets/mobile_posts.css"; // Load mobile styles
    } else {
        link.href = "../stylesheets/posts.css"; // Load desktop styles
    }
}

// run on page load
updateStylesheet();

// update on resize
window.addEventListener("resize", updateStylesheet);

