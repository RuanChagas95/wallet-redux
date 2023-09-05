import { useSelector } from 'react-redux';

function Header() {
  const email = useSelector((state: any) => state.user.email);
  const currency = 'BRL';
  const expenses = useSelector((state: any) => state.wallet.expenses);
  const total = expenses.reduce((acc: number, curr) => {
    const { currency, exchangeRates, value } = curr;
    const rate = exchangeRates[currency].ask;
    return value * rate + acc;
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
