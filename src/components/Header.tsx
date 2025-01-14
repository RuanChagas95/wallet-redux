import { useSelector } from 'react-redux';
import { RootStateType } from '../types';
import calcExRate from '../helpers/calcExRate';

function Header() {
  const email = useSelector((state: RootStateType) => state.user.email);
  const currency = 'BRL';
  const expenses = useSelector((state: RootStateType) => state.wallet.expenses);

  const total = expenses.reduce((acc: number, expense) => {
    return calcExRate(expense) + acc;
  }, 0);

  return (
    <header>
      <p>
        Despesas:
        {' '}
        <label data-testid="total-field">
          {total.toFixed(2)}
        </label>
      </p>

      <p>
        Moeda:
        {' '}
        <label data-testid="header-currency-field">{currency}</label>
      </p>

      <p>
        User:
        {' '}
        <label data-testid="email-field">{email}</label>

      </p>
    </header>
  );
}

export default Header;
