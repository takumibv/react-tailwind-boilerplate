import axios from 'axios';
import { useCallback, useState } from 'react';
import { UserResponse } from '../types/api/userResponse';
import { useMessage } from './useMessage';

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUers] = useState<UserResponse[]>([]);
  const { showMessage } = useMessage();

  const getUsers = useCallback(
    async () => {
      try {
        setLoading(true);
        const { data } = await axios.get<UserResponse[]>('https://jsonplaceholder.typicode.com/users');
        setUers(data);
      } catch (e) {
        showMessage({ title: 'ユーザ取得に失敗しました', status: 'error' });
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { getUsers, loading, users };
};
