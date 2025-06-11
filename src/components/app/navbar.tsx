import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";

const Navbar = () => (
  <nav>
    <Box bg="white" shadow="sm" px={4} py={3}>
      <Container maxW="6xl">
        <HStack justify="space-between">
          <Heading size="md" color="purple.600">
            CakeStore
          </Heading>

          <HStack gap={6}>
            <Text fontWeight="medium" cursor="pointer">
              Home
            </Text>
            <Text fontWeight="medium" cursor="pointer">
              Cakes
            </Text>
            <Text fontWeight="medium" cursor="pointer">
              About
            </Text>
            <Button colorScheme="purple" size="sm">
              Cart
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  </nav>
);

export default Navbar;
