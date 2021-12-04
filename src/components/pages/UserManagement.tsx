import {
  memo, useCallback, useEffect, useState, VFC,
} from 'react';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserResponse } from '../../types/api/userResponse';
import { useSelectUsers } from '../../hooks/useSelectUsers';
import { useLoginUser } from '../../hooks/useLoginUser';
import { UserCard } from '../organisms/user/UserCard';

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { selectedUser, onSelectUser } = useSelectUsers();
  const { loginUser } = useLoginUser();

  useEffect(() => {
    getUsers();
  }, []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser(id, users);
  }, [users, onSelectUser]);

  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <div>
          {users.map((user: UserResponse) => (
            <div key={user.id}>
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
    </>
  );
});
