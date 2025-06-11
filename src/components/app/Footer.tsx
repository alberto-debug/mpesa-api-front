import React from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  Link,
  HStack,
  Separator,
} from "@chakra-ui/react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  MailIcon,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="gray.50" color="gray.700" mt="auto" py={10} px={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={6}
        maxW="6xl"
        mx="auto"
      >
        <Text fontWeight="bold" fontSize="lg">
          🍰 CakeStore
        </Text>

        <HStack gap={6}>
          <Link href="#" aria-label="Facebook" _hover={{ color: "pink.500" }}>
            <Icon as={FacebookIcon} boxSize={5} />
          </Link>
          <Link href="#" aria-label="Twitter" _hover={{ color: "pink.500" }}>
            <Icon as={TwitterIcon} boxSize={5} />
          </Link>
          <Link href="#" aria-label="Instagram" _hover={{ color: "pink.500" }}>
            <Icon as={InstagramIcon} boxSize={5} />
          </Link>
          <Link
            href="mailto:support@cakestore.com"
            aria-label="Email"
            _hover={{ color: "pink.500" }}
          >
            <Icon as={MailIcon} boxSize={5} />
          </Link>
        </HStack>
      </Flex>

      {/* Use Separator instead of Divider */}
      <Separator my={6} borderColor="gray.200" />

      <Flex direction="column" align="center" gap={2}>
        <Text fontSize="sm" color="gray.500">
          &copy; {new Date().getFullYear()} CakeStore. All rights reserved.
        </Text>
        <HStack gap={4} fontSize="sm">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
