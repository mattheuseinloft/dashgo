import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Mattheus</Text>
        <Text color="gray.300" fontSize="small">
          mattheus@email.com
        </Text>
      </Box>

      <Avatar size="md" name="Mattheus" src="https://github.com/mattheuseinloft.png" />
    </Flex>
  );
}