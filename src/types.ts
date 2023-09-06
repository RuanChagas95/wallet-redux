export type CurrenciesType = {
  [key: string]: {
    code: string;
    ask: string,
    name: string
    codein: string,
  };
};

export type ExpensesType = {
  id: number,
  value: string,
  currency: string,
  method: string,
  tag: string,
  description: string,
  exchangeRates: CurrenciesType,
};

export type RootStateType = {
  user: {
    email: string
  },
  wallet: {
    currencies: string[], // array de string
    expenses: ExpensesType[], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
    editor: false, // valor booleano que indica se uma despesa está sendo editada
    idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
  }
};
