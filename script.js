document.addEventListener("DOMContentLoaded", function() {
    // Modo oscuro
    const toggleDarkMode = document.createElement("button");
    toggleDarkMode.textContent = "Modo Oscuro";
    toggleDarkMode.classList.add("btn", "btn-primary", "mt-3");
    document.body.prepend(toggleDarkMode);

    toggleDarkMode.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Mostrar alerta al pasar el mouse sobre el título
    const titulo = document.querySelector("h1");
    titulo.addEventListener("mouseover", function() {
        alert("Bienvenido a Salud y Buena Alimentación");
    });

    // Cambiar color de los enlaces al pasar el mouse
    const enlaces = document.querySelectorAll("ul li a");
    enlaces.forEach(enlace => {
        enlace.addEventListener("mouseover", function() {
            this.style.color = "#ff5733";
        });
        enlace.addEventListener("mouseout", function() {
            this.style.color = "";
        });
    });
});
