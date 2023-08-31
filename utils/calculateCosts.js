function sumcalculatefixedCosts(...costs) {
  return [...costs].reduce((acc, cur) => acc + cur, 0);
}

function calculateCostPerMonth(purchasePrice, lifespan) {
  if (purchasePrice === 0 || lifespan === 0) {
    return 0;
  }
  return purchasePrice / lifespan / 12;
}

function calculateProductivity(idleTime, hoursPerWeek, numberOfEmployees) {
  const nonIdleTime = 1 - idleTime;
  const hoursPerMonth = hoursPerWeek * numberOfEmployees * 4;
  return hoursPerMonth * nonIdleTime;
}


