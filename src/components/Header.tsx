import { useSelector } from 'react-redux';

function Header() {
  const email = useSelector((state: any) => state.user.email);
  const currency = 'BRL';
  return (
    <header>
      <p>
        Despesas:
        {' '}
        <label data-testid="total-field">
          {0}
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
