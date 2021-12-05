import { VFC } from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton: VFC<Props> = function ({
  children,
  onClick,
  disabled = false,
  loading = false,
  className,
}) {
  const isDisabled = disabled || loading;
  return (
    <button
      className={classNames(
        "text-white py-2 px-4 rounded-md",
        !isDisabled && "bg-blue-500 hover:bg-blue-700",
        isDisabled && "bg-blue-200 cursor-default",
        className,
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};
