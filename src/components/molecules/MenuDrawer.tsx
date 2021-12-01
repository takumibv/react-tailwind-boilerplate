import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = ({ isOpen, onClose, onClickHome, onClickUserManagement, onClickSetting }) => {
  return (
    <Drawer placement="right" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody px="0">
            <Button w="100%" mb="2" onClick={onClickHome}>TOP</Button>
            <Button w="100%" mb="2" onClick={onClickUserManagement}>ユーザ一覧</Button>
            <Button w="100%" mb="2" onClick={onClickSetting}>Setting</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}