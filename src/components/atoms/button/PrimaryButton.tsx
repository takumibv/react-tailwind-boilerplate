import { Button } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton: VFC<Props> = ({ children, onClick, disabled = false, loading = false }) => {
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: "0.8" }}
      onClick={onClick}
      disabled={disabled || loading}
      isLoading={loading}
    >
      {children}
    </Button>
  );
}