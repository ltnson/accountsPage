import { useMutation, useQuery } from '@tanstack/react-query';
import typeApi from '../api/typeApi';
import { EditForm, LoginData } from '../model/types';
import axios from 'axios';
import { toast } from 'react-hot-toast';

//post data login
export const loginAccountMutation = () => {
  return useMutation((data: LoginData) => typeApi.login(data), {
    onSuccess: (data) => {
      localStorage.setItem('user', JSON.stringify(data));
    },
    onError: (error) => catchErr(error),
  });
};

//get table data with pathname as params in api
export const getAccountsLimit = (pathName: string) => {
  return useQuery({
    queryKey: ['limit', pathName],
    queryFn: () => typeApi.getAccounts(pathName),
    onError: (err) => catchErr(err),
  });
};

//get signle account data
export const getAccountDetail = (id: number) => {
  return useQuery({
    queryKey: ['detail', id],
    queryFn: () => typeApi.getDetail(id),
    onError: (err) => catchErr(err),
  });
};

//post edit account with id account
export const postAccountEdit = (id: number) => {
  return useMutation(
    (payload: EditForm) => typeApi.postEditAccount(id, payload),
    {
      onSuccess: (newData) =>
        setTimeout(
          () => toast.success(`Account with id ${newData.id} are Update`),
          300,
        ),
      onError: (error) => catchErr(error),
    },
  );
};

//post add new  account
export const postAccountAdd = () => {
  return useMutation(
    (payload: EditForm) => typeApi.postAddNewAccount(payload),
    {
      onSuccess: (newData) =>
        setTimeout(
          () => toast.success(`Account with id ${newData.id} are Update`),
          300,
        ),
      onError: (error) => catchErr(error),
    },
  );
};

//catch err and thow in toast to showing up
//hàm nhận err và xử lý trả về err mess thông báo người dùng bằng toast
export const catchErr = (error: any) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.data.message) {
      toast.error(error.response.data.message);
    }
    toast.error(error.message);
  } else {
    toast.error(error);
  }
  return null;
};
