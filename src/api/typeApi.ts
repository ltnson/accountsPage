import axiosClient from "./axiosClient";
import {
  User,
  Account,
  Accounts,
  LoginData,
  AccountLimit,
  EditForm,
} from "../model/types";

const typeApi = {
  login(data: LoginData): Promise<User> {
    return axiosClient.postLogin(data);
  },
  getSearchAccounts(searchKey: string): Promise<Accounts> {
    return axiosClient.getSearchAccounts(searchKey);
  },
  getDetail(id: number): Promise<Account> {
    return axiosClient.getDetailAccount(id);
  },
  getEditAccount(id: number): Promise<Account> {
    return axiosClient.getSignleAccount(id);
  },
  postEditAccount(id: number, payload: EditForm): Promise<Account> {
    return axiosClient.updateAccount(id, payload);
  },
  postAddNewAccount(payload: EditForm): Promise<Account> {
    return axiosClient.addAccount(payload);
  },
  getAccounts(pathName: string): Promise<AccountLimit> {
    return axiosClient.getLimitAccounts(pathName);
  },
};

export default typeApi;
