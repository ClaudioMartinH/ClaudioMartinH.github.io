// Ejemplo de script para cambiar el texto de un párrafo
const parrafoPresentacion = document.querySelector("#presentacion p"); // Selecciona el párrafo de la sección "Presentación"

parrafoPresentacion.textContent =
  "Aquí puedes escribir una descripción más completa sobre ti, tu experiencia y tus objetivos como desarrollador web. Menciona proyectos relevantes, habilidades técnicas y lo que te hace destacar como profesional.";

// Puedes agregar más scripts para controlar animaciones, transiciones o interacciones con el usuario.

// // Selección de elementos
// const slides = document.querySelectorAll(".slide"); // Selecciona todas las diapositivas
// const currentSlide = document.querySelector(".slide.active"); // Obtiene la diapositiva activa
// const prevButton = document.querySelector("#prev"); // Obtiene el botón "Anterior"
// const nextButton = document.querySelector("#next"); // Obtiene el botón "Siguiente"

// // Función para mostrar la siguiente diapositiva
// function nextSlide() {
//   if (currentSlide.nextElementSibling) {
//     // Si existe una diapositiva siguiente
//     currentSlide.classList.remove("active"); // Remueve la clase "active" de la diapositiva actual
//     currentSlide.nextElementSibling.classList.add("active"); // Agrega la clase "active" a la siguiente diapositiva
//   }
// }

// // Función para mostrar la diapositiva anterior
// function prevSlide() {
//   if (currentSlide.previousElementSibling) {
//     // Si existe una diapositiva anterior
//     currentSlide.classList.remove("active"); // Remueve la clase "active" de la diapositiva actual
//     currentSlide.previousElementSibling.classList.add("active"); // Agrega la clase "active" a la diapositiva anterior
//   }
// }

// // Eventos para los botones
// prevButton.addEventListener("click", prevSlide); // Al hacer clic en el botón "Anterior", ejecuta la función prevSlide
// nextButton.addEventListener("click", nextSlide); // Al hacer clic en el botón "Siguiente", ejecuta la función nextSlide

// // Opcional: Animación de transición
// slides.forEach((slide) => {
//   slide.addEventListener("transitionend", () => {
//     slide.style.display = "none"; // Oculta las diapositivas que no están activas
//   });
// });

// // Inicialización
// const startSlide = 0; // Diapositiva inicial (puede ser 0, 1, etc.)
// slides[startSlide].classList.add("active");
