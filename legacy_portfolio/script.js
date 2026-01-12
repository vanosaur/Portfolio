const professions = ["Python programming.", "Web development.", "AI."];
let i = 0; // Word index
let j = 0; // Letter index
let isDeleting = false;

function typeEffect() {
    let currentWord = professions[i];
    let displayText = currentWord.substring(0, j);

    document.getElementById("typing-text").textContent = displayText;

    if (!isDeleting && j < currentWord.length) {
        j++;
        setTimeout(typeEffect, 150); // Typing speed
    } else if (isDeleting && j > 0) {
        j--;
        setTimeout(typeEffect, 100); // Deleting speed
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % professions.length; // Move to next word
        setTimeout(typeEffect, 1000); // Pause before next word
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);



