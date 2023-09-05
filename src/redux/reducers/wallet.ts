import { addExpense, setCurrencies } from '../actions/actionsTypes';

const initialState = {
  currencies: [],
  expenses: [],
};
type ActionType = { type: string; payload: [] };
export default function walletReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case setCurrencies: {
      return { ...state, currencies: action.payload };
    }

    case addExpense: {
      return { ...state, expenses: [...state.expenses, action.payload] };
    }
    default: { return state; }
  }
}
