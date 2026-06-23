function curry(fn) {
  const numArgs = fn.length; // Obtener el número de argumentos esperados por la función original
  const args = []; // Almacenar los argumentos acumulados

  // Esta función se llama cada vez que se pasa un argumento
  function curried(newArgs) {
    args.push(newArgs); // Agregar los nuevos argumentos al array

    if (args.length >= numArgs) {
      // Si existen suficientes argumentos acumulados, llamamos a la función original
      return fn(...args);
    } else {
      // Si no existen suficientes argumentos, devolvemos una nueva función curried
      return curried;
    }
  }

  return curried; // Devolvemos la función curried inicial
}

module.exports = curry;

const calcAllFour = (var1, var2, var3, var4) => {
  return var1 + var2 - var3 * var4;
};

let curriedDoSomething;

curriedDoSomething = curry(calcAllFour);

console.log(typeof curry(calcAllFour)); //"function"
const firstReturn = curriedDoSomething(1);
console.log(typeof firstReturn); //"function";
const secondReturn = firstReturn(2, 3);
console.log(typeof secondReturn); //"function";
const thirdReturn = secondReturn(3);
console.log(typeof thirdReturn); //"function";

const fourthReturn = thirdReturn(4);
console.log(fourthReturn); //-9;
