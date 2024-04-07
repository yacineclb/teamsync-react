import { useState } from 'react';
import { User } from '../api/types';
import { signIn, signUp } from '../api/auth';
import { useLocalStorage } from './useLocalStorage';

const useSign = () => {
  const [token, setToken] = useLocalStorage('jwt-token', null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function login(user: User) {
    try {
      setError(null);
      setLoading(true);
      if (token) {
        throw new Error('User already logged in');
      }
      const newToken = await signIn(user);
      setToken(newToken.token);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function register(user: User) {
    try {
      setError(null);
      setLoading(true);
      if (token) {
        throw new Error('User already logged in');
      }
      await signUp(user);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setError(null);
      setLoading(true);
      setToken(null);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return {
    login,
    register,
    logout,
    token,
    loading,
    error,
  };
};

export default useSign;
