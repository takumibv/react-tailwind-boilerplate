import { memo, VFC } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo(({ id, imageUrl, userName, fullName, onClick }) => (
  <div
    className="p-4 rouned-lg bg-white shadow-lg rounded-lg hover:opacity-70"
    onClick={() => onClick(id)}
    onKeyPress={() => {
      /** キーが押された時 */
    }}
    role="button"
    tabIndex={0}
  >
    <div>
      <div className="aspect-h-1 aspect-w-1">
        <img src={imageUrl} alt={userName} className="w-full h-full object-center object-cover" />
      </div>
      <p className="text-lg font-bold mt-2">{userName}</p>
      <p className="text-gray-500">{fullName}</p>
    </div>
  </div>
));
