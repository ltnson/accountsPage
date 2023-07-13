import { useNavigate } from 'react-router-dom';

import { loginAccountMutation, catchErr } from '../../hooks/Accounts';
import { LoginData } from '../../model/types';

import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../../util/yupSchema';
import { Toaster } from 'react-hot-toast';

import { Typography, Button, LinearProgress } from '@mui/material';
import VinovaSVG from '../../assets/SVG/VinovaSVG';
import { EmailInput, PasswordInput } from '../forms/LoginForm';

const LoginCart = () => {
  const navigate = useNavigate();

  //hook form of login form and valitate with yup
  const formLogin = useForm<LoginData>({
    resolver: yupResolver(schemaLogin),
  });
  const { handleSubmit } = formLogin;

  const { mutate, isLoading } = loginAccountMutation();

  const onSubmit = (loginData: LoginData) => {
    mutate(loginData, {
      onSuccess: (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/accounts');
      },
      onError: (error) => catchErr(error),
    });
  };

  return (
    <Typography component="div" className=" login-layout">
      <Toaster />
      <div className="cart-login">
        <VinovaSVG />
        <p className="text-xl lg:text-2xl xl:text-3xl font-extrabold">
          RESOURCE MANAGEMENT
        </p>
        <p className="text-slate-200  md:text-lg">
          The #1 tool to plan capacity and schedule work
        </p>
        <div className="flex justify-between ">
          <div className="grow">
            <p className="border my-2"></p>
          </div>
          <p className="px-2 grow-0">Log in</p>
          <div className="grow">
            <p className="border my-2"></p>
          </div>
        </div>
        <FormProvider {...formLogin}>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <EmailInput name="username" />
            <PasswordInput name="password" />
            <Typography className="text-sm md:text-md font-light">
              <a href="#">Forgot your password?</a>
            </Typography>
            {isLoading ? (
              <div className="py-4">
                <LinearProgress />
              </div>
            ) : (
              <Button className="login-btn-1" type="submit">
                Login
              </Button>
            )}
            <div className="flex justify-between ">
              <div className="grow px-2">
                <p className="border my-2"></p>
              </div>
              <Typography className="text-sm md:text-md grow-0">
                Or continue with
              </Typography>
              <div className="grow px-2">
                <p className="border my-2"></p>
              </div>
            </div>
            <Button className="login-btn-2">Login with SSO</Button>
          </form>
        </FormProvider>
      </div>
    </Typography>
  );
};

export default LoginCart;
