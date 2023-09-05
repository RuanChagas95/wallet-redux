import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../services/api';
import { addExpense, setCurrencies } from '../redux/actions/actionsTypes';

function WalletForm() {
  const dispatch = useDispatch();
  type ValuesType = { [key: string]: string | number };
  const id = useSelector((state) => state.wallet.expenses).length;

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currencies = await api();
      delete currencies.USDT;

      dispatch({ type: setCurrencies, payload: Object.keys(currencies) });
    };
    fetchCurrencies();
  }, [dispatch]);
  const currencies = useSelector((state) => state.wallet.currencies);
  const initialValues = {
    id,
    currency: 'USD',
    tag: 'Lazer',
    method: 'Dinheiro',
    exchangeRates: currencies,
  };

  const [values, setValues] = useState<ValuesType>(initialValues);

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    (async () => {
      const apiResult = await api();
      values.exchangeRates = apiResult;
      dispatch({ type: addExpense, payload: values });
      setValues({ ...initialValues, id: values.id + 1 });
      event.target.reset();
    })();
  };

  const inputAmount = useRef<HTMLInputElement>(null);
  useEffect(() => { inputAmount.current?.focus(); }, []);
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="input-amount">

        Valor:
        {' '}
        <input
          ref={ inputAmount }
          id="input-amount"
          onChange={ handleChange }
          type="text"
          data-testid="value-input"
          required
          placeholder="0,00"
          name="value"
        />
      </label>

      <label htmlFor="input-description">
        Descrição:
        {' '}
        <input
          name="description"
          onChange={ handleChange }
          id="input-description"
          type="text"
          data-testid="description-input"
          placeholder="Descrição da despesa"
        />
      </label>
      <label htmlFor="select-currency">
        Moeda:
        {' '}
        <select
          onChange={ handleChange }
          name="currency"
          id="select-currency"
          data-testid="currency-input"
        >
          {currencies.map((currency) => (
            <option key={ currency } value={ currency }>
              {currency}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="input-method">
        Forma de pagamento:
        {' '}
        <select
          onChange={ handleChange }
          name="method"
          id="input-method"
          data-testid="method-input"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>

      <label htmlFor="input-tag">
        Tipo de gasto:
        {' '}
        <select name="tag" onChange={ handleChange } data-testid="tag-input">
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
          <option value="Alimentação">Alimentação</option>
        </select>
      </label>

      <button type="submit">Adicionar Despesa</button>
    </form>
  );
}

export default WalletForm;
