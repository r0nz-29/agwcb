import {Box, Center, HStack, Text} from "@chakra-ui/react";
import {ChakraIcon, ReactIcon} from "../Icons";

export default function Footer() {
  return (
    <Box borderTop="1px" py={4}>
      <Center>
        <HStack>
          <Text color="gray.200" as="span">
            Made with
          </Text>
          <ReactIcon/>
          <Text color="gray.200" as="span">
            - Powered by
          </Text>
          <ChakraIcon/>
        </HStack>
      </Center>
    </Box>
  );
}