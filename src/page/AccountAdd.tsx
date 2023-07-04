import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EditForm } from '../model/types';
import {
  getAccountDetail,
  postAccountEdit,
  postAccountAdd,
  catchErr,
} from '../hooks/Accounts';

import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Toaster, toast } from 'react-hot-toast';
import { schemaEditAccount } from '../util/yupSchema';

import TextForm from '../components/account/account-add-edit-form/TextForm';
import SelectForm from '../components/account/account-add-edit-form/SelectForm';
import DateForm from '../components/account/account-add-edit-form/DateForm';
import SkillForm from '../components/account/account-add-edit-form/SkillForm';
import PhoneForm from '../components/account/account-add-edit-form/PhoneForm';
import { Button, CircularProgress } from '@mui/material';

const AccountAdd = () => {
  const { idAccount } = useParams();
  const navigate = useNavigate();

  const formMethod = useForm<EditForm>({
    resolver: yupResolver(schemaEditAccount),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '+79 ',
      username: '',
      birthDate: new Date().toLocaleDateString('en-US'),
      today: new Date().toLocaleDateString('en-US'),
    },
    mode: 'onChange',
  });
  const { handleSubmit } = formMethod;

  const editDataQuery = idAccount
    ? getAccountDetail(parseInt(idAccount))
    : null;

  useEffect(() => {
    if (editDataQuery?.error) {
      catchErr(editDataQuery.error);
    }
    if (editDataQuery?.data) {
      formMethod.reset({
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

  const editMutation = idAccount
    ? postAccountEdit(parseInt(idAccount))
    : postAccountAdd();

  const onSubmit = (data: EditForm) => {
    return editMutation?.mutate(data, {
      onSuccess: (newData) => {
        toast.success(`Account with id ${newData.id} are Update`);
        navigate('/');
      },
      onError: (error) => catchErr(error),
    });
  };

  return (
    <div className="bg-white w-full h-full rounded-xl p-5 overflow-y-auto">
      <Toaster />
      {editDataQuery?.isLoading && (
        <div className="w-full h-full flex justify-center items-center">
          <CircularProgress size="lg" />
        </div>
      )}
      <FormProvider {...formMethod}>
        <form className="max-w-[680px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 gap-4 py-4 sm:pb-8 ">
            <TextForm label="First Name" span="1" name="firstName" />
            <TextForm label="Last Name" span="1" name="lastName" />
            <TextForm label="Alias" span="1" name="username" />
            <SelectForm label="Role" span="1" array={['1', '2']} />
            <TextForm label="Email" span="2" name="email" />
            <PhoneForm label="Phone" span="2" name="phone" />
          </div>
          <hr className="border-b border-t-neutral/DE " />
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 gap-4 py-4 sm:py-8 ">
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
            <SelectForm label="Office" span="1" array={['Another', 'Test 1']} />
          </div>
          <hr className="border-b border-t-neutral/DE " />
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 gap-4 py-4 sm:py-8">
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
  );
};

export default AccountAdd;
