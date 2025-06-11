"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  SimpleGrid,
  Flex,
  Container,
  Badge,
  Icon,
  VStack,
  HStack,
  Separator,
  Spinner,
} from "@chakra-ui/react";
import { ShoppingCart, Star, Gift } from "lucide-react";
import { Global } from "@emotion/react";
import Footer from "../components/app/Footer";
import Navbar from "../components/app/navbar";

// Global keyframes for Chakra v3
const GlobalStyles = () => (
  <Global
    styles={`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
      }
    `}
  />
);

type Product = {
  id: number;
  productName: string;
  price: number; // assuming backend sends number, convert if string
};

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:8080/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Flex minH="100vh" justify="center" align="center" bg="gray.50">
        <Spinner size="xl" color="purple.600" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex minH="100vh" justify="center" align="center" bg="gray.50" px={4}>
        <Text
          color="red.500"
          fontSize="xl"
          fontWeight="bold"
          textAlign="center"
        >
          {error}
        </Text>
      </Flex>
    );
  }

  return (
    <>
      <GlobalStyles />
      <Flex direction="column" minH="100vh" bg="gray.50">
        <Navbar />

        <Box flex="1">
          {/* Hero Section */}
          <Box
            bg="gray.200"
            py={{ base: 16, md: 24 }}
            px={{ base: 4, md: 8 }}
            textAlign="center"
            position="relative"
            overflow="hidden"
          >
            <Container maxW="4xl" position="relative" zIndex={1}>
              <VStack gap={6}>
                <Heading
                  fontSize={{ base: "4xl", md: "6xl" }}
                  fontWeight="900"
                  color="black"
                  textShadow="0 6px 20px rgba(0,0,0,0.2)"
                  lineHeight="1"
                >
                  Welcome to{" "}
                  <Text as="span" bg="pink.600" bgClip="text">
                    CakeStore
                  </Text>
                </Heading>

                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.700"
                  maxW="2xl"
                  fontWeight="medium"
                >
                  Delicious handcrafted cakes made with love and the finest
                  ingredients 🎂
                </Text>

                <Stack direction={{ base: "column", sm: "row" }} gap={4} pt={4}>
                  <Button
                    bg="white"
                    color="gray.800"
                    size="lg"
                    px={8}
                    py={6}
                    fontSize="md"
                    fontWeight="bold"
                    rounded="full"
                    _hover={{
                      transform: "translateY(-2px) scale(1.03)",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                      bg: "gray.50",
                    }}
                    transition="all 0.3s ease"
                  >
                    <HStack gap={2}>
                      <Icon as={ShoppingCart} boxSize={5} />
                      <Text>Browse Cakes</Text>
                    </HStack>
                  </Button>

                  <Button
                    variant="outline"
                    borderColor="pink.500"
                    color="pink.600"
                    bg="whiteAlpha.200"
                    size="lg"
                    px={8}
                    py={6}
                    fontSize="md"
                    fontWeight="bold"
                    rounded="full"
                    _hover={{
                      bg: "whiteAlpha.300",
                      transform: "translateY(-2px) scale(1.03)",
                      boxShadow: "0 20px 40px rgba(255,255,255,0.2)",
                    }}
                    transition="all 0.3s ease"
                  >
                    <HStack gap={2}>
                      <Icon as={Gift} boxSize={5} />
                      <Text>Custom Orders</Text>
                    </HStack>
                  </Button>
                </Stack>
              </VStack>
            </Container>
          </Box>

          {/* Product Grid */}
          <Container maxW="7xl" py={20} px={4}>
            <VStack gap={12} mb={16}>
              <Badge
                colorScheme="purple"
                px={6}
                py={2}
                rounded="full"
                fontSize="sm"
                fontWeight="bold"
              >
                OUR PRODUCTS
              </Badge>

              <Heading
                fontSize={{ base: "4xl", md: "5xl" }}
                fontWeight="900"
                textAlign="center"
                bgGradient="linear(45deg, #FF6B6B, #4ECDC4)"
                bgClip="text"
                letterSpacing="-0.02em"
              >
                Signature Cakes
              </Heading>

              <Text
                fontSize="xl"
                color="gray.600"
                textAlign="center"
                maxW="2xl"
              >
                Each cake is a masterpiece, baked fresh daily with premium
                ingredients and lots of love ❤️
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={12}>
              {products.map((product) => (
                <Box
                  key={product.id}
                  bg="white"
                  rounded="3xl"
                  overflow="hidden"
                  boxShadow="0 10px 40px rgba(0,0,0,0.1)"
                  _hover={{
                    boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                    transform: "translateY(-8px) scale(1.02)",
                  }}
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  position="relative"
                  p={8}
                >
                  {/* Placeholder image - you can extend your backend to send image URLs */}
                  <Image
                    src="https://images.unsplash.com/photo-1606312616077-d6f1f363e25e?auto=format&fit=crop&w=800&q=80"
                    alt={product.productName}
                    w="full"
                    h="280px"
                    objectFit="cover"
                    rounded="2xl"
                    mb={6}
                    draggable={false}
                  />
                  <VStack align="start" gap={4}>
                    <Heading fontSize="2xl" fontWeight="bold" color="gray.800">
                      {product.productName}
                    </Heading>
                    <Text color="gray.600" fontSize="md" lineHeight="tall">
                      {/* No description in your DTO - optionally add */}
                      Delicious cake perfect for any occasion.
                    </Text>
                    <HStack justify="space-between" w="full">
                      <Text fontWeight="900" fontSize="2xl" color="purple.600">
                        ${product.price.toFixed(2)}
                      </Text>
                      <HStack gap={1}>
                        {/* For demo: always show 5 stars */}
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Icon
                            key={i}
                            as={Star}
                            color="yellow.400"
                            boxSize={5}
                            fill="yellow.400"
                          />
                        ))}
                      </HStack>
                    </HStack>
                    <Separator />
                    <Button
                      bgGradient="linear(45deg, #FF6B6B, #4ECDC4)"
                      color="white"
                      size="lg"
                      rounded="full"
                      width="full"
                      _hover={{ opacity: 0.9 }}
                      transition="all 0.3s ease"
                    >
                      <Flex justify="center" align="center" gap={2}>
                        <Icon as={ShoppingCart} />
                        <span>Add to Cart</span>
                      </Flex>
                    </Button>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        <Footer />
      </Flex>
    </>
  );
};

export default Dashboard;
