import { memo, VFC } from 'react';

type Props = {
  id: number,
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo(({
  id,
  imageUrl,
  userName,
  fullName,
  onClick,
}) => (
  <div
    style={{
      width: '260px',
      height: '260px',
      background: 'white',
      padding: '16px',
    }}
    onClick={() => onClick(id)}
  >
    <div>
      <img
        src={imageUrl}
        alt={userName}
      />
      <p>{userName}</p>
      <p>{fullName}</p>
    </div>
  </div>
));
