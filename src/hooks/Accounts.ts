import { useMutation, useQuery } from '@tanstack/react-query';
import typeApi from '../api/typeApi';
import { EditForm, LoginData } from '../model/types';
import axios from 'axios';
import { toast } from 'react-hot-toast';

//post data login
export const loginAccountMutation = () => {
  return useMutation((data: LoginData) => typeApi.login(data));
};

//get table data with pathname as params in api
export const getAccountsLimit = (pathName: string) => {
  return useQuery({
    queryKey: ['limit', pathName],
    queryFn: () => typeApi.getAccounts(pathName),
    staleTime: 5 * 60 * 1000,
  });
};

//get signle account data
export const getAccountDetail = (id: number) => {
  return useQuery({
    queryKey: ['detail', id],
    queryFn: () => typeApi.getDetail(id),
    staleTime: 5 * 60 * 1000,
  });
};

//post edit account with id account
export const postAccountEdit = (id: number) => {
  return useMutation((payload: EditForm) =>
    typeApi.postEditAccount(id, payload),
  );
};

//post add new  account
export const postAccountAdd = () => {
  return useMutation((payload: EditForm) => typeApi.postAddNewAccount(payload));
};

//catch err and thow in toast to showing up
export const catchErr = (error: any) => {
  if (axios.isAxiosError(error)) {
    toast.error(error?.response?.data.message);
  } else {
    console.log(error);
  }
};
