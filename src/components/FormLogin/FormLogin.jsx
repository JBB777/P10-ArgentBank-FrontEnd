import './FormLogin.scss';
import Field from '../Field/Field';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

function FormLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const error = useSelector((state) => state.profil.error);

  const redirect = async (log) => {
    log.preventDefault();

    const userInfos = {
      username,
      password,
      remember,
    };
    dispatch(login(userInfos)).then((result) => {
      if (result.payload) {
        navigate('/user');
      }
    });
  };

  return (
    <form onSubmit={redirect}>
      <Field
        className="input-wrapper"
        id="username"
        label="Username"
        type="text"
        target={(e) => setUsername(e.target.value)}
      />
      <Field
        className="input-wrapper"
        id="password"
        label="Password"
        type="password"
        target={(e) => setPassword(e.target.value)}
      />
      <Field
        className="input-remember"
        id="remember-me"
        label="Remember me"
        type="checkbox"
        target={() => setRemember(!remember)}
      />
      <button className="sign-in-button">Sign In</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default FormLogin;
