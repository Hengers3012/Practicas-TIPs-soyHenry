function MaxValue(shares) {
  if (shares.length < 2) {
    return 0;
  }

  let minPrice = shares[0];
  let maxProfit = 0;

  for (let i = 1; i < shares.length; i++) {
    const currentPrice = shares[i];
    const potentialProfit = currentPrice - minPrice;

    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }

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
