import { ChangeEvent, memo, useState, VFC } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");
  const { login, loading } = useAuth();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onClickLogin = () => {
    login(userId);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="p-4 rounded-lg bg-white shadow-md">
        <h1 className="text-center text-lg font-bold">ユーザ管理アプリ</h1>
        <div className="mt-4">
          <input
            placeholder="ユーザID"
            defaultValue={userId}
            onChange={onChangeUserId}
            className="border border-gray-300 p-2 rounded-lg"
          />
          <PrimaryButton onClick={onClickLogin} loading={loading} disabled={userId.length === 0}>
            ログイン
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
});
