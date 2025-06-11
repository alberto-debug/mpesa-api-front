import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Services", "Contact"];

function NavLink({ children }: { children: React.ReactNode }) {
  return (
    <Button variant="ghost" _hover={{ bg: "gray.200" }} fontWeight="normal">
      {children}
    </Button>
  );
}

export default function NavBar() {
  const { open, onOpen, onClose } = useDisclosure(); // ✅ Chakra v3

  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} align="center" justify="space-between">
        <Box fontWeight="bold" fontSize="xl">
          MyBrand
        </Box>

        <HStack gap={4} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>

        <IconButton
          aria-label="Toggle Navigation"
          display={{ base: "flex", md: "none" }}
          onClick={open ? onClose : onOpen}
          variant="ghost"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </IconButton>
      </Flex>

      {open && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" gap={2}>
            {links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
