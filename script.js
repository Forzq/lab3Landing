document.addEventListener("DOMContentLoaded", function() {
    
    const header = document.querySelector("header");
    const headerNav = document.querySelector(".headerNav");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Устанавливаем начальное состояние меню как закрытое
    header.classList.remove("open");

    document.getElementById("burgerMenu").addEventListener("click", function() {
        header.classList.toggle("open");
        if (header.classList.contains("open")) {
            document.body.appendChild(overlay);
            document.body.style.overflow = "hidden"; // Запрещаем прокрутку
        } else {
            overlay.remove();
            document.body.style.overflow = "auto"; // Восстанавливаем прокрутку
        }
    });

    document.addEventListener("click", function(event) {
        if (!headerNav.contains(event.target) && !header.contains(event.target)) {
            header.classList.remove("open");
            overlay.remove();
            document.body.style.overflow = "auto"; // Восстанавливаем прокрутку
        }
    });

    headerNav.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            header.classList.remove("open");
            overlay.remove();
            document.body.style.overflow = "auto"; // Восстанавливаем прокрутку
        }
    });

    // Добавляем код плавной прокрутки сюда
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки

        const targetId = this.getAttribute('href'); // Получаем ID целевого раздела
        const targetElement = document.querySelector(targetId); // Находим целевой элемент

        // Плавная прокрутка к целевому элементу
        targetElement.scrollIntoView({
          behavior: 'smooth' // Используем плавную прокрутку
        });
      });
    });
});