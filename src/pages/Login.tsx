import { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/actions/actionsTypes';

function Login() {
  const [isValid, setIsValid] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const inputChange = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    inputs[key] = event.target.value;
    const passwordV = inputs.password.length >= 6;
    const emailV = inputs.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    setInputs({ ...inputs });
    setIsValid((passwordV && !!emailV));
  };
  const dispatch = useDispatch();
  const test = useSelector((state: any) => state);
  console.log(test.user.email);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={ (event) => {
        event.preventDefault();
        dispatch({ type: setUser, payload: inputs.email });
        navigate('/carteira');
      } }
    >
      <label htmlFor="input-email">
        Email:
        {' '}
        <input
          required
          data-testid="email-input"
          type="email"
          id="input-email"
          autoComplete="email"
          onChange={ (event) => inputChange(event, 'email') }
        />
      </label>
      <label htmlFor="input-password">
        Senha:
        {' '}
        <input
          required
          data-testid="password-input"
          type="password"
          id="input-password"
          autoComplete="current-password"
          minLength={ 6 }
          onChange={ (event) => inputChange(event, 'password') }

        />
      </label>
      <button disabled={ !isValid } type="submit">Entrar</button>
    </form>
  );
}

export default Login;
