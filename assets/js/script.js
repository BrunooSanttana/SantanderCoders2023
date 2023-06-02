// Função para alternar entre o modo light e dark
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    var button = document.getElementById("toggle-dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "White Mode";
    } else {
        button.textContent = "Dark Mode";
    }
}

// Evento de clique no botão para alternar o modo
var toggleButton = document.getElementById("toggle-dark-mode");
toggleButton.addEventListener("click", function () {
    toggleDarkMode();
});
