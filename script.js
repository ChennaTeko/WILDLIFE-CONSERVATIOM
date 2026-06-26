
const video = document.getElementById("wildlifeVideo");
const button = document.getElementById("toggleBtn");

button.addEventListener("click", function () {

    if (video.style.display === "none") {
        // Show and play the video
        video.style.display = "block";
        video.play();
    } else {
        if (video.paused) {
            // Play if visible but paused
            video.play();
        } else {
            // Hide the video
            video.style.display = "none";
        }
    }

});