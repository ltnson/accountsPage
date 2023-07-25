import * as yup from 'yup';

//validate for edit accounts
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
    .min(10, 'Phone is too invalid')
    .max(20, 'Phone is too invalid')
    .test('check-length', 'your length of phone number is invalid', (value) => {
      return value.trim().length >= 8;
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

//validate if user login
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

//validate todo form
export const schemaTodo = yup.object().shape({
  text: yup
    .string()
    .min(4, 'Text is too short')
    .max(40, 'Text is invalid')
    .required('Text is required'),
  complete: yup.bool().required('Please select your complete'),
  author: yup
    .string()
    .min(4, 'Author is too short')
    .max(20, 'Author is invalid')
    .required('Author is required'),
});
