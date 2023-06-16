import axiosClient from "./axiosClient";
import {
  User,
  Account,
  Accounts,
  LoginData,
  AccountLimit,
} from "../model/types";

const typeApi = {
  login(data: LoginData): Promise<User> {
    return axiosClient.postLogin(data);
  },
  getAccounts(limit: number, skip: number): Promise<AccountLimit> {
    return axiosClient.getLimitAccounts(limit, skip);
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
  postEditAccount(id: number, payload: any): Promise<Account> {
    return axiosClient.updateAccount(id, payload);
  },
  postAddNewAccount(payload: Account): Promise<Account> {
    return axiosClient.addAccount(payload);
  },
};

export default typeApi;
