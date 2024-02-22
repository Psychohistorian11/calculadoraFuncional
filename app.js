//-----------------------------Recursividad-------------------------------

const factorial = (n) => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));


//--------------------Funciones puras-----------------------------
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b !== 0 ? a / b : "Error: División por cero");

//-------------------Funciones de orden superior------------------
const calcularOperaciones = (operacion, numeros) => {
  switch (operacion) {
    case "+":
      return numeros.reduce(sumar);
    case "-":
      return numeros.reduce(restar);
    case "*":
      return numeros.reduce(multiplicar);
    case "/":
      return numeros.reduce(dividir);
    case "^":
      return numeros.reduce(potencia);
    case "!":
      return factorial(numeros[0]);
    default:
      return "Operación no válida";
  }
};


//-------------------------Funciones anónimas-----------------------------
const potencia = function (base, exponente) {
  return Math.pow(base, exponente);
};



let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
 
      const expressionArray = displayValue.match(/[]?([.0-9]+|[+\-*/!^])/g);
      console.log(expressionArray)
      
      const numeros = expressionArray.filter((element, index) => index % 2 === 0).map(Number);
      const operadores = expressionArray.filter((element, index) => index % 2 !== 0);
      console.log("numeros:" + numeros)
      console.log("operadores:" + operadores[0][0])

      //----------------------------------LLamar a la calculadora----------------------------
      
      const resultado = calcularOperaciones(operadores[0][0], numeros);
  
      document.getElementById('display').value = resultado;
      
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
