import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { FormData } from "../../model/types";
import EyeClosed from "../../assets/SVG/loginSVG/EyeClosed";
import EyeOpen from "../../assets/SVG/loginSVG/EyeOpen";
import VinovaSVG from "../../assets/SVG/VinovaSVG";
import { useState } from "react";

const loginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const LoginCart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="fixed px-8 z-20 top-0 py-12 w-full h-screen">
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
            <label className="text-sm md:text-base">Email</label>
            <TextField
              size="small"
              placeholder="Email"
              fullWidth
              {...register("email")}
            />
            <p className="text-red">{errors.email?.message}</p>
          </div>
          <div>
            <label className="text-sm md:text-base">Password</label>
            <TextField
              size="small"
              placeholder="Password"
              fullWidth
              type={showPassword ? "text" : "password"}
              {...register("password")}
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
            Forgot your password?
          </Typography>
          <Button className="login-btn-1" type="submit">
            Login
          </Button>
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
