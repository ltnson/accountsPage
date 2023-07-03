import { redirect } from 'react-router-dom';
import { User } from '../model/types';

export function getAuthUser() {
  const userString = localStorage.getItem('user');
  if (!userString) {
    return null;
  }
  const user: User = JSON.parse(userString);
  return user;
}

export function checkAuth(): User | Response {
  const user = getAuthUser();
  if (!user) {
    return redirect('/login');
  }
  return user;
}

export function checkAuthLoginPage(): null | Response {
  const user = getAuthUser();
  if (!user) {
    return null;
  }
  return redirect('/');
}
