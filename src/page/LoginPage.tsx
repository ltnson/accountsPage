import LoginBackground from '../components/login-page/LoginBackground';
import LoginCart from '../components/login-page/LoginCart';

const LoginPage = () => {
  return (
    <div className="w-full max-w-[1440px] bg-login-page ">
      <LoginBackground />
      <LoginCart />
    </div>
  );
};

export default LoginPage;
