import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { Box, Stack, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { UserResponse } from '../../../types/api/userResponse';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: UserResponse | null;
  isAdmin?: boolean;
};

export const UserDetailModal: VFC<Props> = memo(({
  isOpen,
  onClose,
  user,
  isAdmin = false,
}) => {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUserName(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4} >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>ユーザー名</FormLabel>
              <Input value={userName} onChange={onChangeUserName} readOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={name} onChange={onChangeName} readOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>メール</FormLabel>
              <Input value={email} onChange={onChangeEmail} readOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>電話番号</FormLabel>
              <Input value={phone} onChange={onChangePhone} readOnly={!isAdmin} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
})