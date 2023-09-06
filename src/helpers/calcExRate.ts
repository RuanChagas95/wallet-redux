import { ExpensesType } from '../types';

export default function calcExRate(expense:ExpensesType) {
  const { currency: currExpense, exchangeRates, value } = expense;
  const rate = Number(exchangeRates[currExpense].ask);
  return Number(value) * rate;
}
