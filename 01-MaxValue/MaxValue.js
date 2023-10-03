function MaxValue(shares) {
  if (shares.length < 2) {
    // No se pueden realizar operaciones de compra y venta con menos de 2 precios
    return 0;
  }

  let minPrice = shares[0]; // Inicializamos el precio mínimo con el primer elemento
  let maxProfit = 0; // Inicializamos la ganancia máxima en 0

  for (let i = 1; i < shares.length; i++) {
    const currentPrice = shares[i];
    const potentialProfit = currentPrice - minPrice;

    // Se actualiza la ganancia máxima si se encuentra una ganancia mayor
    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }

    // Se actualiza el precio mínimo si se encuentra un precio más bajo
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
  }

  return maxProfit;
}

module.exports = MaxValue;

const acciones = [4, 3, 2, 5, 11];
const mayorGanancia = MaxValue(acciones);
console.log("Mayor ganancia:", mayorGanancia); // Debería mostrar 9 en la consola

const acciones2 = [23, 7, 3, 4, 8, 6];
const mayorGanancia2 = MaxValue(acciones2);
console.log("Mayor ganancia:", mayorGanancia2); // Debería mostrar 5 en la consola
