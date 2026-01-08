export function costCalculator(transactionAmount) {
    const fee = 3;
    const interestRate = 0.01;
    const totalCost = transactionAmount + fee + (transactionAmount * interestRate);
    return totalCost;
}