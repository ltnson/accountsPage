import axios from 'axios';

const LOGIN_URL = import.meta.env.VITE_REACT_POST_LOGIN;
const ACCOUNTS_URL = import.meta.env.VITE_REACT_ACCOUNTS_URL;
const SEARCH_ACCOUNTS_URL = import.meta.env.VITE_REACT_SEARCH_ACCOUNTS_URL;
const ADD_ACCOUNT_URL = import.meta.env.VITE_REACT_ADD_ACCOUNT_URL;

const axiosClient = {
  postLogin: async (data: any) => {
    try {
      const response = await axios.post(
        `${LOGIN_URL}`,
        {
          username: data.username,
          password: data.password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getAccounts: async () => {
    try {
      const response = await axios.get(ACCOUNTS_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getLimitAccounts: async (pathName: string) => {
    try {
      const response = await axios.get(`${ACCOUNTS_URL}${pathName}`);
      const jsonData = response.data;
      return jsonData;
    } catch (error) {
      throw error;
    }
  },

  getDetailAccount: async (id: number) => {
    try {
      const response = await axios.get(`${ACCOUNTS_URL}/${id}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  getSignleAccount: async (id: number) => {
    try {
      const response = await axios.get(`${ACCOUNTS_URL}/${id}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  updateAccount: async (id: number, payload: any) => {
    try {
      const response = await axios.put(`${ACCOUNTS_URL}/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lastName: payload,
        }),
      });
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  addAccount: async (payload: any) => {
    try {
      const response = await axios.post(`${ADD_ACCOUNT_URL}`, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payload,
        }),
      });
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  getSearchAccounts: async (searchKey: string) => {
    try {
      const response = await axios.get(`${SEARCH_ACCOUNTS_URL}${searchKey}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default axiosClient;
