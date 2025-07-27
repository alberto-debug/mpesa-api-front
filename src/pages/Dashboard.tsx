import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  IconButton,
  Stack,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <nav>
      <Box bg="white" shadow="sm" px={4} py={3}>
        <Container maxW="6xl">
          <HStack justify="space-between">
            <Heading size="md" color="purple.600">
              CakeStore
            </Heading>

            {/* Desktop Nav */}
            <HStack
              gap={6}
              display={{ base: "none", md: "flex" }}
              align="center"
            >
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

            {/* Mobile Menu Button */}
            <IconButton
              aria-label="Toggle Menu"
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              variant="ghost"
              _icon={{ as: Menu }}
            />
          </HStack>
        </Container>
      </Box>

      {/* Mobile Modal */}
      <Modal isOpen={open} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent bg="white" rounded="xl">
          <ModalBody p={6}>
            <Stack gap={4}>
              <IconButton
                aria-label="Close menu"
                variant="ghost"
                alignSelf="end"
                onClick={onClose}
                _icon={{ as: X }}
              />
              <Text fontWeight="medium" cursor="pointer" onClick={onClose}>
                Home
              </Text>
              <Text fontWeight="medium" cursor="pointer" onClick={onClose}>
                Cakes
              </Text>
              <Text fontWeight="medium" cursor="pointer" onClick={onClose}>
                About
              </Text>
              <Button colorScheme="purple" size="sm" onClick={onClose}>
                Cart
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </nav>
  );
};

export default Navbar;
