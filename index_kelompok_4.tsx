import React from 'react';
import { render } from 'react-dom';
import LoginForm from './LoginForm';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

export const App = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  const onSubmitUsername = (username, password) => {
    if (username === '' || password === '') {
      alert('Wajib Masukan Username & Password');
    } else if (username === 'Kelompok 4 Punya' && password === 'Fourth_Club') {
      setIsLogin(true);
    } else {
      alert('Username atau Password Salah');
    }
  };

  const onSignOut = () => setIsLogin(false);

  return (
    <div>
      <div style={{ minWidth: 400 }}>
        {isLogin ? (
          <div>
            <h3>Login Succesfull</h3>
            <h3>Welcome To Dunia Lain</h3>
            <button onClick={onSignOut}>Keluar</button>
          </div>
        ) : (
          <LoginForm onSubmit={onSubmitUsername} />
        )}
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
