import { useCallback, useState } from "react";
import { UserResponse } from "../types/api/userResponse";

// 選択したユーザを特定し、モーダルを開くカスタムフック
export const useSelectUsers = () => {
  const [selectedUser, setSelectedUser] = useState<UserResponse | null>(null);

  const onSelectUser = useCallback((id: number, users: UserResponse[]) => {
    setSelectedUser(users.find((user) => user.id === id) ?? null);
  }, []);

  return { selectedUser, onSelectUser };
};
