import { useNavigate } from 'react-router-dom';
import LoginBackground from '../components/Auth/LoginBackground';
import LoginCart from '../components/Auth/LoginCart';
import { loginAccountMutation } from '../hooks/Accounts';
import { LoginData } from '../model/types';

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = loginAccountMutation();

  const handleLogin = (loginData: LoginData) => {
    mutate(loginData, {
      onSuccess: () => {
        navigate('/accounts');
      },
    });
  };

  return (
    <div className="w-full bg-login-page ">
      <LoginBackground />
      <LoginCart isLoading={isLoading} handleLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
