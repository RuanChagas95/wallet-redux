import { useSelector, useDispatch } from 'react-redux';
import { RootStateType } from '../types';
import calcExRate from '../helpers/calcExRate';
import { deleteExpense } from '../redux/actions/actionsTypes';

function Table() {
  const expenses = useSelector((state: RootStateType) => state.wallet.expenses);
  const dispatch = useDispatch();
  const handleDelete = (id: number) => {
    dispatch({ type: deleteExpense, payload: id });
  };
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
            <td>

              <button
                data-testid="delete-btn"
                onClick={ () => handleDelete(expense.id) }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
