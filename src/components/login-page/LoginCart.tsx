import { useState, useContext } from 'react';
import { AccountContext } from '../../store/AccountContext';
import { useNavigate } from 'react-router-dom';

import { loginAccountMutation, catchErr } from '../../hooks/Accounts';
import { LoginData } from '../../model/types';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Toaster } from 'react-hot-toast';

import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  LinearProgress,
} from '@mui/material';
import EyeClosed from '../../assets/SVG/loginSVG/EyeClosed';
import EyeOpen from '../../assets/SVG/loginSVG/EyeOpen';
import VinovaSVG from '../../assets/SVG/VinovaSVG';

const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const LoginCart = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
  });

  const { setUserData, setAuthLogin } = useContext(AccountContext);
  const { mutate, isLoading } = loginAccountMutation();

  const onSubmit = (loginData: LoginData) => {
    mutate(loginData, {
      onSuccess: (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        setUserData(data);
        setAuthLogin(true);
        navigate('/accounts/page=1');
      },
      onError: (error) => catchErr(error),
    });
  };

  return (
    <div className="fixed px-8 z-30 top-0 py-12 w-full h-screen">
      <Toaster />
      <div className="cart-css">
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="text-sm md:text-base">User Name</label>
            <p>kminchelle</p>
            <TextField
              size="small"
              placeholder="User Name"
              fullWidth
              {...register('username')}
            />
            <p className="text-red">{errors.username?.message}</p>
          </div>
          <div>
            <label className="text-sm md:text-base">Password</label>
            <p>0lelplR</p>
            <TextField
              size="small"
              placeholder="Password"
              fullWidth
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeClosed /> : <EyeOpen />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <p className="text-red">{errors.password?.message}</p>
          </div>

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
      </div>
    </div>
  );
};

export default LoginCart;
