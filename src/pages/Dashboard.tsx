// App.tsx
"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NavBar from "./components/app/NavBar";

const products = [
  {
    id: 1,
    name: "Chocolate Chip Cookie",
    description: "Classic and gooey with rich chocolate chips.",
    image: "/cookies/choco-chip.jpg",
    price: "$3.50",
  },
  {
    id: 2,
    name: "Peanut Butter Cookie",
    description: "Nutty and soft with a sweet crunch.",
    image: "/cookies/peanut-butter.jpg",
    price: "$3.00",
  },
  {
    id: 3,
    name: "Oatmeal Raisin Cookie",
    description: "Chewy, hearty, and naturally sweet.",
    image: "/cookies/oatmeal.jpg",
    price: "$3.25",
  },
];

export default function App() {
  return (
    <Box bg={{ base: "white", _dark: "gray.900" }} minH="100vh">
      <NavBar />

      {/* Hero Section */}
      <Box
        as="section"
        py={{ base: 10, md: 20 }}
        textAlign="center"
        bg="orange.100"
      >
        <Container maxW="container.lg">
          <VStack spacing={6}>
            <Heading size="2xl" color="orange.700">
              Welcome to Sweet Crumbs 🍪
            </Heading>
            <Text fontSize="lg" color="gray.700">
              Freshly baked cookies, delivered with love.
            </Text>
            <Button size="lg" colorScheme="orange">
              Order Now
            </Button>
            <Image
              src="/cookies/hero-cookie.png"
              alt="hero cookie"
              boxSize="300px"
              objectFit="contain"
              mt={4}
            />
          </VStack>
        </Container>
      </Box>

      {/* Products Section */}
      <Box as="section" py={10}>
        <Container maxW="container.lg">
          <Heading
            size="lg"
            mb={6}
            color={{ base: "orange.600", _dark: "orange.300" }}
          >
            Our Best Sellers
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6}>
            {products.map((product) => (
              <Box
                key={product.id}
                bg={{ base: "gray.50", _dark: "gray.800" }}
                shadow="md"
                rounded="lg"
                overflow="hidden"
                borderWidth="1px"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  h="200px"
                  w="100%"
                  objectFit="cover"
                />
                <Box p={4}>
                  <Heading size="md" mb={2}>
                    {product.name}
                  </Heading>
                  <Text
                    fontSize="sm"
                    color={{ base: "gray.600", _dark: "gray.300" }}
                  >
                    {product.description}
                  </Text>
                  <Text fontWeight="bold" mt={2} color="orange.500">
                    {product.price}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
