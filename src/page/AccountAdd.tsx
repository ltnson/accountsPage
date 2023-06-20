import TextForm from '../components/account/account-add-edit/TextForm';
import SelectForm from '../components/account/account-add-edit/SelectForm';
import DateForm from '../components/account/account-add-edit/DateForm';
import SkillForm from '../components/account/account-add-edit/SkillForm';
import PhoneForm from '../components/account/account-add-edit/PhoneForm';
import { Button } from '@mui/material';
import {
  getAccountDetail,
  postAccountEdit,
  postAccountAdd,
  catchErr,
} from '../hooks/Accounts';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EditForm } from '../model/types';
import { Toaster, toast } from 'react-hot-toast';

import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  firstName: yup
    .string()
    .min(2, 'Fist Name is required')
    .required('Fist Name is required'),
  lastName: yup
    .string()
    .min(2, 'Fist Name is required')
    .required('Last Name is required'),
  email: yup
    .string()
    .email('Email is invalid')
    .matches(/^\S*$/, "Can't contain spaces")
    .required('Email is required'),
  phone: yup
    .string()
    .required('Phone is required')
    .min(6, 'Phone is too short')
    .max(18, 'Phone is too long')
    .matches(/^[+0-9\s]+$/, 'Phone must only contain numbers'),
  username: yup
    .string()
    .min(2, 'User Name is required')
    .required('User Name is required'),
  birthDate: yup
    .string()
    .min(2, 'Day Name is required')
    .required('Day Name is required'),
  today: yup
    .string()
    .min(2, 'Day Name is required')
    .required('Day Name is required'),
});

const AccountAdd = () => {
  const [editData, setEditData] = useState<EditForm | null>(null);
  const { idAccount } = useParams();

  const editDataQuery = idAccount
    ? getAccountDetail(parseInt(idAccount))
    : null;
  const formMethod = useForm<EditForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      username: '',
      birthDate: new Date().toLocaleDateString('en-US'),
      today: new Date().toLocaleDateString('en-US'),
    },
    mode: 'onChange',
  });
  const { handleSubmit } = formMethod;

  const navigate = useNavigate();

  useEffect(() => {
    if (editDataQuery?.error) {
      catchErr(editDataQuery.error);
    }
    if (editDataQuery?.data) {
      setEditData({
        firstName: editDataQuery.data.firstName,
        lastName: editDataQuery.data.lastName,
        email: editDataQuery.data.email,
        phone: editDataQuery.data.phone,
        username: editDataQuery.data.username,
        birthDate: editDataQuery.data.birthDate,
        today: new Date().toLocaleDateString('en-US'),
      });
    }
  }, [editDataQuery?.data]);

  useEffect(() => {}, []);
  useEffect(() => {
    if (editData) formMethod.reset(editData);
  }, [editData]);

  const editMutation = idAccount ? postAccountEdit(parseInt(idAccount)) : null;

  const addMutation = postAccountAdd();

  const onSubmit = (data: EditForm) => {
    console.log(data);
    if (idAccount) {
      return editMutation?.mutate(data, {
        onSuccess: (data) => {
          toast.success(`Account with id ${data.id} are Update`);
          navigate('/accounts');
        },
        onError: (error) => catchErr(error),
      });
    }
    addMutation?.mutate(data, {
      onSuccess: () => {
        toast.success(`New Account are Created`);
        navigate('/accounts');
      },
      onError: (error) => catchErr(error),
    });
  };

  return (
    <div className="w-full h-screen pt-14 sm:pt-20 p-2 sm:p-4 ">
      <Toaster />
      <div className="bg-white w-full h-full rounded-xl p-5 overflow-y-auto">
        <FormProvider {...formMethod}>
          <form className="max-w-[680px]" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 gap-4 pb-4 sm:pb-6 border-b border-t-neutral/DE">
              <TextForm label="First Name" span="1" name="firstName" />
              <TextForm label="Last Name" span="1" name="lastName" />
              <TextForm label="Alias" span="1" name="username" />
              <SelectForm label="Role" span="1" array={['1', '2']} />
              <TextForm label="Email" span="2" name="email" />
              <PhoneForm label="Phone" span="2" name="phone" />
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 gap-4 py-4 sm:py-6 border-b border-t-neutral/DE">
              <SelectForm
                label="Contract type"
                span="2"
                array={['Email', 'Phone', 'Test']}
              />
              <DateForm label="Contract Start Date" span="1" name="birthDate" />
              <DateForm label="Contract End Date" span="1" name="today" />
              <SelectForm
                label="Company"
                span="1"
                array={['Vinova', 'Another']}
              />
              <SelectForm
                label="Office"
                span="1"
                array={['Another', 'Test 1']}
              />
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 gap-4 py-4 sm:py-6">
              <SelectForm
                label="Team"
                span="1"
                array={['Front-end', 'Back-end']}
              />
              <SelectForm
                label="Position"
                span="1"
                array={['Absolute', 'Fixed']}
              />
              <SelectForm label="Level" span="2" array={['Intern', 'Junior']} />
              <SkillForm />
            </div>
            <Button className="save col-span-2" type="submit">
              Save
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default AccountAdd;
