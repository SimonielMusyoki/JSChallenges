const checkbox = document.getElementById("toggle");

checkbox.addEventListener("change", e => {
    document.body.classList.toggle("dark");
    e.target.checked;
});