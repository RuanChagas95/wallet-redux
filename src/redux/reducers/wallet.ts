import { addExpense, deleteExpense, setCurrencies } from '../actions/actionsTypes';
import { ExpensesType } from '../../types';

const initialState = {
  currencies: [],
  expenses: <ExpensesType[]>[],
};
type ActionType = { type: string; payload: [] | number };
export default function walletReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case setCurrencies: {
      return { ...state, currencies: action.payload };
    }

    case addExpense: {
      return { ...state, expenses: [...state.expenses, action.payload] };
    }
    case deleteExpense: {
      return { ...state,
        expenses:
        [...state.expenses.filter((expense) => expense.id !== action.payload)] };
    }
    default: { return state; }
  }
}
