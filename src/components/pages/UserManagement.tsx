import { memo, useCallback, useEffect, VFC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { Box, Center, Stack, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserResponse } from "../../types/api/userResponse";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUsers } from "../../hooks/useSelectUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { selectedUser, onSelectUser } = useSelectUsers();

  useEffect(() => {
    getUsers();
  }, []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser(id, users, onOpen);
  }, [users, onOpen, onSelectUser]);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner size="lg" />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center">
          {users.map((user: UserResponse) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        onClose={onClose}
        user={selectedUser}
      />
    </>
  );
})