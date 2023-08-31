const costs = {
  fixedCosts: {
    structural: {
      rent: 1500,
      iptu: 0,
      electricity: 300,
      water: 0,
      others: 0,
      total: 0,
    },
    administrativos: {
      internet: 80,
      telefone: 50,
      marketing: 80,
      financialAccounting: 50,
      others: 0,
      total: 0,
    },
    equipment: {
      equipaments: [
        {
          name: '',
          purchasePrice: 0,
          lifespan: 0,
          costPerMonth: 0,
        },
      ],
      total: 0,
    },
    employees: {
      wage: 0,
      fgts: 0,
      mealTicket: 0,
      transportationVouchers: 0,
      benefits: 0,
      others: 0,
      total: 0,
    },
    total: 0,
  },
  productivity: {
    hoursPerWeek: 0,
    numberOfEmployees: 0,
    hoursPerMonth: 0,
    idleTime: 0.2,
    total: 0,
  },
  unitFixedCost: {
    timeNeededToProduce: 0,
    fixedCostPerhour: 0,
    fixedCostPerMinute: 0,
    total: 0,
  },
  unitVariableCost: {
    feedstock: [
      {
        name: '',
        purchasePrice: 0,
        quantityPurchased: 0,
        quantityUsed: 0,
      },
    ],
    total: 0,
  },
  taxes: {
    cardFees: 0,
    otherFees: 0,
    taxes: 0,
    profitMargin: 0,
  },
  result: {
    unitFixedCost: unitFixedCost.total,
    unitVariableCost: unitVariableCost.total,
    unitTotalCost: 0,
    MinimumPriceSuggestion: 0,
  },
};