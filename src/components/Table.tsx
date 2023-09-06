import { useSelector } from 'react-redux';
import { RootStateType } from '../types';
import calcExRate from '../helpers/calcExRate';

function Table() {
  const expenses = useSelector((state: RootStateType) => state.wallet.expenses);

  return (
    <table>
      <tr>
        <th>Descrição:</th>
        <th>Tag:</th>
        <th>Método de pagamento:</th>
        <th>Valor:</th>
        <th>Moeda:</th>
        <th>Câmbio utilizado:</th>
        <th>Valor convertido:</th>
        <th>Moeda de conversão:</th>
        <th>Editar/Excluir:</th>
      </tr>
      <tbody>
        {expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{Number(expense.value).toFixed(2)}</td>
            <td>{expense.currency}</td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>{calcExRate(expense)}</td>
            <td>
              {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
            </td>
            <td>{expense.exchangeRates[expense.currency].codein}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
