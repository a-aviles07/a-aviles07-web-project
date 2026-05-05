const form = document.getElementById("marvelForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const movie = document.getElementById("movie").value;
    const character = document.getElementById("character").value;

    message.textContent = `${movie}, nice! "${character}" is a great Marvel Character!`;
});