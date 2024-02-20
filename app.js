// Funciones puras
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b !== 0 ? a / b : "Error: División por cero");

// Funciones de orden superior
const calcularOperaciones = (operacion, numeros) => {
  switch (operacion) {
    case "+":
      return numeros.reduce(sumar, 0);
    case "-":
      return numeros.reduce(restar);
    case "*":
      return numeros.reduce(multiplicar, 1);
    case "/":
      return numeros.reduce(dividir);
    default:
      return "Operación no válida";
  }
};

let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    // Convertir la expresión matemática a un array de números y operadores
    const expressionArray = displayValue.match(/[]?([.0-9]+|[+\-*/])/g);
    console.log(expressionArray)
    
    // Separar los números y operadores
    const numeros = expressionArray.filter((element, index) => index % 2 === 0).map(Number);
    const operadores = expressionArray.filter((element, index) => index % 2 !== 0);
    console.log("numeros:" + numeros)
    console.log("operadores:" + operadores[0][0])

    // Calcular el resultado usando las funciones puras y de orden superior
    const resultado = calcularOperaciones(operadores[0][0], numeros);

    // Mostrar el resultado en el display
    document.getElementById('display').value = resultado;
    
    // Reiniciar la variable de la expresión
    displayValue = resultado.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}
