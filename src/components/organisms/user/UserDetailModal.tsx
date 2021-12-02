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
import { memo, VFC } from "react";
import { UserResponse } from '../../../types/api/userResponse';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: UserResponse | null;
};

export const UserDetailModal: VFC<Props> = memo(({
  isOpen,
  onClose,
  user,
}) => {
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
              <Input value={user?.username} readOnly />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={user?.name} readOnly />
            </FormControl>
            <FormControl>
              <FormLabel>メール</FormLabel>
              <Input value={user?.email} readOnly />
            </FormControl>
            <FormControl>
              <FormLabel>電話番号</FormLabel>
              <Input value={user?.phone} readOnly />
            </FormControl>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
})