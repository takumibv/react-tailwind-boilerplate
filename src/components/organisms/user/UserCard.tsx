import { Image } from "@chakra-ui/image";
import { Box, Stack, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { memo, VFC } from "react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
};

export const UserCard: VFC<Props> = memo(({
  imageUrl,
  userName,
  fullName,
}) => {
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image
          src={imageUrl}
          boxSize="160px"
          borderRadius="full"
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">{userName}</Text>
        <Text fontSize="sm" color="gray">{fullName}</Text>
      </Stack>
    </Box>
  );
})