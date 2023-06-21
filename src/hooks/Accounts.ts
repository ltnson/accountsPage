import { useMutation, useQuery } from '@tanstack/react-query';
import typeApi from '../api/typeApi';
import { EditForm, LoginData } from '../model/types';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const loginAccountMutation = () => {
  return useMutation((data: LoginData) => typeApi.login(data));
};

export const getAccountsLimit = (pathName: string) => {
  return useQuery({
    queryKey: ['limit', pathName],
    queryFn: () => typeApi.getAccounts(pathName),
    staleTime: 50000,
  });
};

export const getAccountDetail = (id: number) => {
  return useQuery({
    queryKey: ['detail', id],
    queryFn: () => typeApi.getDetail(id),
    staleTime: 50000,
  });
};

export const postAccountEdit = (id: number) => {
  return useMutation((payload: EditForm) =>
    typeApi.postEditAccount(id, payload),
  );
};

export const postAccountAdd = () => {
  return useMutation((payload: EditForm) => typeApi.postAddNewAccount(payload));
};

export const catchErr = (error: any) => {
  if (axios.isAxiosError(error)) {
    toast.error(error?.response?.data.message);
  } else {
    console.log(error);
  }
};
