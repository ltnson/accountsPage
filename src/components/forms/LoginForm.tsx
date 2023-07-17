import { TextField, InputAdornment, IconButton } from '@mui/material';
import EyeClosed from '../../assets/SVG/loginSVG/EyeClosed';
import EyeOpen from '../../assets/SVG/loginSVG/EyeOpen';
import { Control, useController } from 'react-hook-form';
import { useState } from 'react';
import { LoginData } from '../../model/types';

export const PasswordInput = ({
  name,
  control,
}: {
  name: string;
  control: Control<LoginData>;
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    field: { onChange },
    fieldState: { error },
  } = useController({
    name: 'password',
    control,
  });
  return (
    <div>
      <label className="text-sm md:text-base">Password</label>
      <TextField
        size="small"
        placeholder="Password"
        fullWidth
        helperText={error ? error?.message : null}
        error={!!error}
        type={showPassword ? 'text' : 'password'}
        onChange={(e) => onChange(e.target.value)}
        name={name}
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
    </div>
  );
};

export const EmailInput = ({
  name,
  control,
}: {
  name: string;
  control: Control<LoginData>;
}) => {
  const {
    field: { onChange },
    fieldState: { error },
  } = useController({
    name: 'username',
    control,
  });
  return (
    <div>
      <label className="text-sm md:text-base">User Name</label>
      <TextField
        size="small"
        placeholder="User Name"
        helperText={error ? error?.message : null}
        error={!!error}
        fullWidth
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
