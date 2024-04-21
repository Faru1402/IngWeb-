// Espera a que el documento HTML se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el formulario del documento
    const form = document.querySelector("form");

    // Agrega un evento de escucha al formulario cuando se envía
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
        const formData = new FormData(form); // Obtiene los datos del formulario
        const data = Object.fromEntries(formData.entries()); // Convierte los datos en un objeto

        const incompleteFields = []; // Crea un array para almacenar los campos incompletos

        // Recorre cada clave en el objeto de datos
        for (const key in data) {
            if (data[key] === "") { // Si el valor del campo es vacío
                incompleteFields.push(key); // Agrega la clave al array de campos incompletos
            }
        }

        // Si hay campos incompletos
        if (incompleteFields.length > 0) {
            alert("Please fill in all the required fields."); // Muestra una alerta al usuario
            console.log("Incomplete fields:", incompleteFields); // Muestra los campos incompletos en la consola
            return; // Detiene la ejecución del código
        }

        console.log(data); // Muestra los datos en la consola
    });

    // Obtiene todas las secciones del documento
    const sections = document.querySelectorAll("section");

    // Agrega la clase "fade-in" a cada sección
    sections.forEach(function(section) {
        section.classList.add("fade-in");
    });

    // Obtiene todos los botones del documento
    const buttons = document.querySelectorAll("button");

    // Agrega eventos de escucha a cada botón
    buttons.forEach(function(button) {
        // Cuando el mouse se mueve sobre el botón
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "blue"; // Cambia el color de fondo del botón a azul
        });

        // Cuando el mouse se mueve fuera del botón
        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "initial"; // Restaura el color de fondo inicial del botón
        });
    });
});

// Función para enviar el formulario
function submitForm(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    var nombre = document.getElementById("nombre").value; // Obtiene el valor del campo de entrada "nombre"
    alert("El paciente " + nombre + " será atendido en 1 hora."); // Muestra una alerta con el nombre del paciente
    return false; // Detiene la ejecución del código
}
