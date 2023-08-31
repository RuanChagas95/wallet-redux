import { setUser } from '../actions/actionsTypes';

const initialState = {
  email: '',
};
type ActionType = { payload: string; type: string };
export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case setUser:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
