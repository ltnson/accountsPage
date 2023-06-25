import LoginBackground from '../components/Auth/LoginBackground';
import LoginCart from '../components/Auth/LoginCart';

const LoginPage = () => {
  return (
    <div className="w-full max-w-[1440px] bg-login-page ">
      <LoginBackground />
      <LoginCart />
    </div>
  );
};

export default LoginPage;
