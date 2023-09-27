// Simulacion interacción con el usuario para seleccionar una receta de cocina
function simularInteraccion() {
    let recetas = ["Tarta de manzana", "Empanadas de carne", "Sopa de verduras", "Milanesas con puré de papas"];
    let seleccionada = false;

    while (!seleccionada) {
        let opcion = parseInt(prompt("Selecciona una opción:\n1. Tarta de manzana\n2. Empanadas de carne\n3. Sopa de verduras\n4. Milanesas con puré de papas"));

        if (opcion >= 1 && opcion <= recetas.length) {
            let recetaSeleccionada = recetas[opcion - 1];
            alert(`Has seleccionado la receta: ${recetaSeleccionada}`);
            seleccionada = true;
        } else {
            alert("Opción inválida. Por favor, selecciona una opción válida.");
        }
    }
}

// Ejecutar la función para simular la interacción con el usuario
simularInteraccion();
