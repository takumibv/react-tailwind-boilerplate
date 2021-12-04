import { VFC } from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton: VFC<Props> = function ({
  children, onClick, disabled = false, loading = false, className,
}) {
  return (
    <button
      className={classNames(className)}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {children}
    </button>
  );
};
