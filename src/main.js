// Calculadora simple para principiantes

// Función para sumar
function sumar(a, b) {
    return a + b;
}

// Función para restar
function restar(a, b) {
    return a - b;
}

// Función para multiplicar
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir
function dividir(a, b) {
    if (b == 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

// Función principal de la calculadora
function calculadora() {
    // Mostrar el menú de opciones
    var opcion = prompt("¿Qué operación quieres hacer?\n1 - Sumar\n2 - Restar\n3 - Multiplicar\n4 - Dividir\nEscribe el número de tu opción:");
    
    // Pedir el primer número
    var numero1 = prompt("Escribe el primer número:");
    numero1 = parseFloat(numero1);
    
    // Pedir el segundo número
    var numero2 = prompt("Escribe el segundo número:");
    numero2 = parseFloat(numero2);
    
    var resultado;
    var operacion;
    
    // Usar if para decidir qué operación hacer
    if (opcion == "1") {
        resultado = sumar(numero1, numero2);
        operacion = numero1 + " + " + numero2 + " = " + resultado;
    } else if (opcion == "2") {
        resultado = restar(numero1, numero2);
        operacion = numero1 + " - " + numero2 + " = " + resultado;
    } else if (opcion == "3") {
        resultado = multiplicar(numero1, numero2);
        operacion = numero1 + " × " + numero2 + " = " + resultado;
    } else if (opcion == "4") {
        resultado = dividir(numero1, numero2);
        if (resultado == "No se puede dividir por cero") {
            operacion = "Error: " + resultado;
        } else {
            operacion = numero1 + " ÷ " + numero2 + " = " + resultado;
        }
    } else {
        operacion = "Opción no válida. Debes elegir 1, 2, 3 o 4";
        resultado = "Error";
    }
    
    // Mostrar el resultado en la consola
    console.log(operacion);
    
    // Mostrar el resultado en un alert
    alert(operacion);
    
    return resultado;
}

// Llamar a la función para que se ejecute
calculadora();