
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
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const MotionStack = motion(Stack);

const Navbar = () => {
  const { open, onOpen, onClose } = useDisclosure();

  const toggleMenu = () => {
    open ? onClose() : onOpen();
  };

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
              onClick={toggleMenu}
              variant="ghost"
              _icon={{ as: open ? X : Menu }}
            />
          </HStack>

          {/* Mobile Nav Items */}
          <AnimatePresence initial={false}>
            {open && (
              <MotionStack
                gap={4}
                mt={4}
                display={{ md: "none" }}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                overflow="hidden"
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
                <Button colorScheme="purple" size="sm" alignSelf="start">
                  Cart
                </Button>
              </MotionStack>
            )}
          </AnimatePresence>
        </Container>
      </Box>
    </nav>
  );
};

export default Navbar;
