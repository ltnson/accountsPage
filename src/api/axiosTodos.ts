import axios from 'axios';

const TODOS_URL = import.meta.env.VITE_REACT_TODOS_LIST;

const axiosTodos = {
  getTodoList: async () => {
    try {
      const response = await axios.get(TODOS_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  postNewTodo: async (data: any) => {
    try {
      const response = await axios.post(TODOS_URL, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (typeof response.data !== 'string') {
        throw response.data.join('\n');
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  postEditTodo: async (id: string, data: any) => {
    try {
      const response = await axios.post(`${TODOS_URL}/${id}`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (typeof response.data !== 'string') {
        throw response.data.join('\n');
      }
      if (response.data === 'Error: undefined') {
        throw response.data + ' ,Id of todo invalid!!';
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteTodo: async (id: string) => {
    try {
      const response = await axios.delete(`${TODOS_URL}/${id}`);
      if (response.data === 'Error: undefined') {
        throw response.data + ' ,Id of todo invalid!!';
      }
      return response.data;
    } catch (err) {
      throw err;
    }
  },
};

export default axiosTodos;
