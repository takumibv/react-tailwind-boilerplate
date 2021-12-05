import { memo, useCallback, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserResponse } from "../../types/api/userResponse";
import { useSelectUsers } from "../../hooks/useSelectUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser } = useSelectUsers();
  const { loginUser } = useLoginUser();

  useEffect(() => {
    getUsers();
  }, []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser(id, users);
    },
    [users, onSelectUser, loginUser],
  );

  return (
    <div className="py-6">
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {users.map((user: UserResponse) => (
            <div key={user.id} className="">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
});
