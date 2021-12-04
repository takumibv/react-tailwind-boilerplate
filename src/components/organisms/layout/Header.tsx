import { memo, VFC } from 'react';
import { useHistory } from 'react-router-dom';

export const Header: VFC = memo(() => {
  const history = useHistory();

  return (
    <div>
      header
    </div>
  );
});
