import axiosClient from "./axiosClient";
import { User, Account, Accounts, CartResponse } from "../model/types";

const typeApi = {
  login(username: string, password: string): Promise<User> {
    return axiosClient.postLogin(username, password);
  },
  getAccounts(limit: number, skip: number): Promise<Accounts> {
    return axiosClient.getLimitAccounts(limit, skip);
  },
  getSearchAccounts(searchKey: string): Promise<Accounts> {
    return axiosClient.getSearchAccounts(searchKey);
  },
  getDetail(id: number): Promise<CartResponse> {
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
