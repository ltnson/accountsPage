import { useMutation, useQuery } from "@tanstack/react-query";
import typeApi from "../api/typeApi";
import { LoginData } from "../model/types";
import axios from "axios";
import { toast } from "react-hot-toast";

export const loginAccountMutation = () => {
  return useMutation((data: LoginData) => typeApi.login(data));
};

export const getAccountsLimit = (limit: number, skip: number) => {
  return useQuery({
    queryKey: ["limit", limit, skip],
    queryFn: () => typeApi.getAccounts(limit, skip),
  });
};

export const getAccountDetail = (id: number) => {
  return useQuery({
    queryKey: ["detail", id],
    queryFn: () => typeApi.getDetail(id),
  });
};

// export const getAccountEdit = (id: string) => {
//   return useQuery({
//     queryKey: ["detail", id],
//     queryFn: () => typeApi.getDetail(id),
//   });
// };

export const catchErr = (error: any) => {
  if (axios.isAxiosError(error)) {
    toast.error(error?.response?.data.message);
  } else {
    console.log(error);
  }
};
