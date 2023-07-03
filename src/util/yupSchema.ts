import * as yup from 'yup';

export const schemaEditAccount = yup.object({
  firstName: yup
    .string()
    .min(3, 'Fist Name is required')
    .required('Fist Name is required'),
  lastName: yup
    .string()
    .min(3, 'Fist Name is required')
    .required('Last Name is required'),
  email: yup
    .string()
    .email('Email is invalid')
    .matches(/^\S*$/, "Can't contain spaces")
    .required('Email is required'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(/^[+0-9\s]+$/, 'Phone must only contain numbers')
    .test('test-name', 'Phone is invalid', (value) => {
      if (value) {
        const length = value.replace(/\s+/g, '').length;
        return length < 17;
      }
      return true;
    })
    .test('test2-name', 'Phone is required', (value) => {
      if (value) {
        if (value.split(' ')[1].includes('+') || value.split(' ')[1] === '')
          return false;
      }
      return true;
    }),
  username: yup
    .string()
    .min(3, 'User Name is required')
    .required('User Name is required'),
  birthDate: yup
    .string()
    .min(3, 'Day Name is required')
    .required('Day Name is required'),
  today: yup
    .string()
    .min(3, 'Day Name is required')
    .required('Day Name is required'),
});

export const schemaLogin = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username is too short')
    .max(20, 'Username is invalid')
    .required('Fist Name is required'),
  password: yup
    .string()
    .min(4, 'Password is too short')
    .max(20, 'Password is invalid')
    .required('Fist Name is required'),
});
