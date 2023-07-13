import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EditForm } from '../../model/types';
import {
  getAccountDetail,
  postAccountEdit,
  postAccountAdd,
  catchErr,
} from '../../hooks/Accounts';

import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Toaster, toast } from 'react-hot-toast';
import { schemaEditAccount } from '../../util/yupSchema';

import TextForm from '../../components/forms/TextForm';
import SelectForm from '../../components/forms/SelectForm';
import DateForm from '../../components/forms/DateForm';
import SkillForm from '../../components/forms/SkillForm';
import PhoneForm from '../../components/forms/PhoneForm';
import { Button, CircularProgress, LinearProgress } from '@mui/material';

const AccountAdd = () => {
  const { idAccount } = useParams();
  const navigate = useNavigate();

  //form data
  const formMethod = useForm<EditForm>({
    resolver: yupResolver(schemaEditAccount),
    mode: 'onBlur',
  });
  const {
    handleSubmit,
    formState: { errors },
    setFocus,
  } = formMethod;

  useEffect(() => {
    const firstError = (
      Object.keys(errors) as Array<keyof typeof errors>
    ).reduce<keyof typeof errors | null>((field, a) => {
      const fieldKey = field as keyof typeof errors;
      return !!errors[fieldKey] ? fieldKey : a;
    }, null) as keyof EditForm;

    if (firstError) {
      setFocus(firstError);
    }
  }, [errors, setFocus]);

  //get data if editing
  const editDataQuery = idAccount
    ? getAccountDetail(parseInt(idAccount))
    : null;

  //reset data of form if edit
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
  }, [editDataQuery?.data, editDataQuery?.error]);

  //query post data edit
  const editMutation = idAccount
    ? postAccountEdit(parseInt(idAccount))
    : postAccountAdd();

  const onSubmit = (data: EditForm) => {
    return editMutation.mutate(data, {
      onSuccess: (newData) => {
        setTimeout(
          () => toast.success(`Account with id ${newData.id} are Update`),
          300,
        );
        navigate('/accounts');
      },
      onError: (error) => {
        catchErr(error);
      },
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

      {editDataQuery?.error ? (
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-10">
            <p className="text-2xl">
              Not found account with id{' '}
              <span className="text-red">{idAccount}</span>
            </p>
            <p
              className="text-2xl text-t-blue cursor-pointer"
              onClick={() => navigate(-1)}
            >
              Back to page ?
            </p>
          </div>
        </div>
      ) : (
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
              <SelectForm
                label="Office"
                span="1"
                array={['Another', 'Test 1']}
              />
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
            {editMutation.isLoading ? (
              <div className="py-4">
                <LinearProgress />
              </div>
            ) : (
              <Button className="save col-span-2" type="submit">
                Save
              </Button>
            )}
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default AccountAdd;
