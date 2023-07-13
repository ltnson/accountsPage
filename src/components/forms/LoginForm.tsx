import { TextField, InputAdornment, IconButton } from '@mui/material';
import EyeClosed from '../../assets/SVG/loginSVG/EyeClosed';
import EyeOpen from '../../assets/SVG/loginSVG/EyeOpen';
import { useFormContext, useController } from 'react-hook-form';
import { useState } from 'react';

export const PasswordInput = ({ name }: { name: string }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { control } = useFormContext();
  const {
    field: { onChange },
    fieldState: { error },
  } = useController({
    name: name,
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

export const EmailInput = ({ name }: { name: string }) => {
  const { control } = useFormContext();
  const {
    field: { onChange },
    fieldState: { error },
  } = useController({
    name: name,
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
