import { LoginData } from '../../model/types';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../../util/yupSchema';
import { Toaster } from 'react-hot-toast';

import { Typography, Button, LinearProgress } from '@mui/material';
import VinovaSVG from '../../assets/SVG/VinovaSVG';
import { EmailInput, PasswordInput } from '../forms/LoginForm';

const LoginCart = ({
  isLoading,
  handleLogin,
}: {
  isLoading: boolean;
  handleLogin: (loginData: LoginData) => void;
}) => {
  //hook form of login form and valitate with yup
  const formLogin = useForm<LoginData>({
    resolver: yupResolver(schemaLogin),
    mode: 'onBlur',
  });
  const { handleSubmit, control } = formLogin;

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
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleLogin)}
        >
          <EmailInput name="username" control={control} />
          <PasswordInput name="password" control={control} />
          <Typography className="text-sm md:text-md fonadd-light">
            <a>Forgot your password?</a>
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
      </div>
    </Typography>
  );
};

export default LoginCart;
