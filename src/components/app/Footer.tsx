import React from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  Link,
  HStack,
  VStack,
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
    <Box as="footer" bg="gray.200" color="gray.700" mt="auto" py={10} px={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        gap={6}
        maxW="6xl"
        mx="auto"
        w="full"
      >
        <Text fontWeight="bold" fontSize="lg">
          🍰 CakeStore
        </Text>

        <HStack
          flexWrap="wrap"
          justify={{ base: "flex-start", md: "flex-end" }}
          gap={4}
        >
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

      <Separator my={6} borderColor="gray.300" />

      <VStack gap={2} textAlign="center">
        <Text fontSize="sm" color="gray.500">
          &copy; {new Date().getFullYear()} CakeStore. All rights reserved.
        </Text>
        <HStack
          flexWrap="wrap"
          justify="center"
          gap={4}
          fontSize="sm"
          color="gray.600"
        >
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
