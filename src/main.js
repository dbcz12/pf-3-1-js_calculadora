// Calculadora básica interactiva

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
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}

// Función para mostrar el menú de opciones
function mostrarMenu() {
    console.log("1. Sumar (+)");
    console.log("2. Restar (-)");
    console.log("3. Multiplicar (*)");
    console.log("4. Dividir (/)");
    console.log("5. Salir");
}

// Función principal de la calculadora
function calculadora() {
  
    let continuar = true;
    
    while (continuar) {
        mostrarMenu();
        
        // Pedir opción al usuario
        const opcion = prompt("Selecciona una opción valida:\n 1. Sumar (+)\n 2. Restar (-)\n 3. Multiplicar (*)\n 4. Dividir (/)\n 5. Salir");
        
        switch (opcion) {
            case '1':
                console.log("\n--- SUMA ---");
                const num1Suma = parseFloat(prompt("Ingresa el primer número: "));
                const num2Suma = parseFloat(prompt("Ingresa el segundo número: "));
                
                if (isNaN(num1Suma) || isNaN(num2Suma)) {
                    alert("Error: Por favor ingresa números válidos");
                    console.log("Error: Por favor ingresa números válidos");
                } else {
                    const resultadoSuma = sumar(num1Suma, num2Suma);
                    alert(`Resultado: ${num1Suma} + ${num2Suma} = ${resultadoSuma}`);
                    console.log(`Resultado: ${num1Suma} + ${num2Suma} = ${resultadoSuma}`);
                }
                break;
                
            case '2':
                console.log("\n--- RESTA ---");
                const num1Resta = parseFloat(prompt("Ingresa el primer número: "));
                const num2Resta = parseFloat(prompt("Ingresa el segundo número: "));
                
                if (isNaN(num1Resta) || isNaN(num2Resta)) {
                    alert("Error: Por favor ingresa números válidos");
                    console.log("Error: Por favor ingresa números válidos");
                } else {
                    const resultadoResta = restar(num1Resta, num2Resta);
                    alert(`Resultado: ${num1Resta} - ${num2Resta} = ${resultadoResta}`);
                    console.log(`Resultado: ${num1Resta} - ${num2Resta} = ${resultadoResta}`);
                }
                break;
                
            case '3':
                console.log("\n--- MULTIPLICACIÓN ---");
                const num1Mult = parseFloat(prompt("Ingresa el primer número: "));
                const num2Mult = parseFloat(prompt("Ingresa el segundo número: "));
                
                if (isNaN(num1Mult) || isNaN(num2Mult)) {
                    alert("Error: Por favor ingresa números válidos");
                    console.log("Error: Por favor ingresa números válidos");
                } else {
                    const resultadoMult = multiplicar(num1Mult, num2Mult);
                    alert(`Resultado: ${num1Mult} * ${num2Mult} = ${resultadoMult}`);
                    console.log(`Resultado: ${num1Mult} * ${num2Mult} = ${resultadoMult}`);
                }
                break;
                
            case '4':
                console.log("\n--- DIVISIÓN ---");
                const num1Div = parseFloat(prompt("Ingresa el primer número: "));
                const num2Div = parseFloat(prompt("Ingresa el segundo número: "));
                
                if (isNaN(num1Div) || isNaN(num2Div)) {
                    alert("Error: Por favor ingresa números válidos");
                    console.log("Error: Por favor ingresa números válidos");
                } else {
                    const resultadoDiv = dividir(num1Div, num2Div);
                    alert(`Resultado: ${num1Div} / ${num2Div} = ${resultadoDiv}`);
                    console.log(`Resultado: ${num1Div} / ${num2Div} = ${resultadoDiv}`);
                }
                break;
                
            case '5':
                alert("¡Gracias por usar la calculadora!");
                console.log("¡Gracias por usar la calculadora!");
                continuar = false;
                break;
                
            default:
                alert("Opción no válida. Por favor selecciona una opción del 1 al 5.");
                console.log("Opción no válida. Por favor selecciona una opción del 1 al 5.");
                break;
        }
    }
}

export function addTwoNumbers(num1, num2, op = "+") {
    switch (op) {
        case '+': {
            const r = sumar(num1, num2);
            console.log(`Resultado: ${num1} + ${num2} = ${r}`);
            return r;
        }
        case '-': {
            const r = restar(num1, num2);
            console.log(`Resultado: ${num1} - ${num2} = ${r}`);
            return r;
        }
        case '*': {
            const r = multiplicar(num1, num2);
            console.log(`Resultado: ${num1} * ${num2} = ${r}`);
            return r;
        }
        case '/': {
            const r = dividir(num1, num2);
            console.log(`Resultado: ${num1} / ${num2} = ${r}`);
            return r;
        }
        default:
            console.log("Operación no válida");
            return "Operación no válida";
    }
}

// Exportar funciones para testing
export { sumar, restar, multiplicar, dividir };

// Solo ejecutar calculadora si prompt está disponible (navegador)
if (typeof prompt !== 'undefined') {
    calculadora();
}