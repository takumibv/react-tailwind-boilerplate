import {
  ChangeEvent, memo, useState, VFC,
} from 'react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useAuth } from '../../hooks/useAuth';

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState('');
  const { login, loading } = useAuth();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onClickLogin = () => {
    login(userId);
  };

  return (
    <div>
      <div>
        <h1>ユーザ管理アプリ</h1>
        <div>
          <input placeholder="ユーザID" defaultValue={userId} onChange={onChangeUserId} />
          <PrimaryButton onClick={onClickLogin} loading={loading} disabled={userId.length === 0}>ログイン</PrimaryButton>
        </div>
      </div>
    </div>
  );
});
