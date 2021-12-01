import { useCallback, useState } from "react";
import axios from "axios";
import { UserResponse } from "../types/api/userResponse";
import { useHistory } from "react-router";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { showMessage } = useMessage();

  const login = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const { data } = await axios.get<UserResponse>(`https://jsonplaceholder.typicode.com/users/${id}`)
      if (data) {
        showMessage({ title: "ログインしました。", status: "success" });
        history.push("/home");
      } else {
        showMessage({ title: "ユーザが見つかりません", status: "error" });
      }
    } catch (error) {
      showMessage({ title: "ログインに失敗しました。", status: "error" });
    } finally {
      setLoading(false);
    }
  }, []);

  return { login, loading };
};