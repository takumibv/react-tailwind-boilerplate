import { useCallback, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { UserResponse } from "../types/api/userResponse";
import { useMessage } from "./useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const login = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const { data } = await axios.get<UserResponse>(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (data) {
        const isAdmin = data.id === 10;
        setLoginUser({ ...data, isAdmin });
        showMessage({ title: "ログインしました。", status: "success" });
        history.push("/home");
      } else {
        showMessage({ title: "ユーザが見つかりません", status: "error" });
        setLoading(false);
      }
    } catch (error) {
      showMessage({ title: "ログインに失敗しました。", status: "error" });
      setLoading(false);
    }
  }, []);

  return { login, loading };
};
