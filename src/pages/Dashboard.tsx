"use client";

import type React from "react";
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
} from "@chakra-ui/react";
import {
  ShoppingCart,
  Heart,
  ArrowRight,
  Star,
  Sparkles,
  Gift,
} from "lucide-react";
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

const cakes = [
  {
    name: "Chocolate Heaven",
    image:
      "https://images.unsplash.com/photo-1612197593458-c0a9e5c507e2?auto=format&fit=crop&w=800&q=80",
    price: "$28.99",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    badgeColor: "red",
    description: "Rich, decadent chocolate layers with premium cocoa",
  },
  {
    name: "Vanilla Dream",
    image:
      "https://images.unsplash.com/photo-1606312616077-d6f1f363e25e?auto=format&fit=crop&w=800&q=80",
    price: "$24.99",
    rating: 4.6,
    reviews: 89,
    badge: "Popular",
    badgeColor: "orange",
    description: "Classic vanilla sponge with silky buttercream",
  },
  {
    name: "Strawberry Bliss",
    image:
      "https://images.unsplash.com/photo-1604908177742-f96cde062bfa?auto=format&fit=crop&w=800&q=80",
    price: "$32.99",
    rating: 4.9,
    reviews: 156,
    badge: "New",
    badgeColor: "green",
    description: "Fresh strawberry cake with cream cheese frosting",
  },
];

const Dashboard: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Flex direction="column" minH="100vh" bg="gray.50">
        <Navbar />

        <Box flex="1">
          {/* Hero Section */}
          <Box
            bgGradient="linear(135deg, #FF6B6B 0%, #4ECDC4 25%, #45B7D1 50%, #96CEB4 75%, #FFEAA7 100%)"
            py={{ base: 24, md: 40 }}
            px={{ base: 4, md: 8 }}
            textAlign="center"
            position="relative"
            overflow="hidden"
          >
            {/* Animated Background Elements */}
            <Box
              position="absolute"
              top="10%"
              left="10%"
              w="100px"
              h="100px"
              bg="whiteAlpha.200"
              rounded="full"
              style={{ animation: "float 6s ease-in-out infinite" }}
            />
            <Box
              position="absolute"
              top="60%"
              right="15%"
              w="80px"
              h="80px"
              bg="whiteAlpha.300"
              rounded="full"
              style={{ animation: "float 4s ease-in-out infinite reverse" }}
            />
            <Box
              position="absolute"
              bottom="20%"
              left="20%"
              w="60px"
              h="60px"
              bg="whiteAlpha.200"
              rounded="full"
              style={{ animation: "float 5s ease-in-out infinite" }}
            />

            {/* Dot Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bgGradient="radial(circle, whiteAlpha.200 2px, transparent 2px)"
              backgroundSize="60px 60px"
              opacity={0.4}
            />

            <Container maxW="6xl" position="relative" zIndex={1}>
              <VStack gap={10}>
                <Badge
                  bg="whiteAlpha.300"
                  color="gray.800"
                  px={8}
                  py={4}
                  rounded="full"
                  fontSize="md"
                  fontWeight="bold"
                  backdropFilter="blur(20px)"
                  border="3px solid"
                  borderColor="whiteAlpha.500"
                  textShadow="0 2px 4px rgba(255,255,255,0.5)"
                  boxShadow="0 8px 32px rgba(0,0,0,0.1)"
                >
                  <HStack gap={2}>
                    <Icon as={Sparkles} boxSize={4} />
                    <Text>Handcrafted Since 2020</Text>
                    <Icon as={Sparkles} boxSize={4} />
                  </HStack>
                </Badge>

                <VStack gap={8}>
                  <Heading
                    fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
                    fontWeight="900"
                    color="white"
                    lineHeight="0.85"
                    textShadow="0 8px 32px rgba(0,0,0,0.3)"
                    letterSpacing="-0.02em"
                  >
                    Welcome to
                    <br />
                    <Text
                      as="span"
                      bgGradient="linear(45deg, #FF6B6B, #4ECDC4, #45B7D1)"
                      bgClip="text"
                      textShadow="none"
                    >
                      CakeStore
                    </Text>
                  </Heading>

                  <VStack gap={4}>
                    <Text
                      fontSize="8xl"
                      role="img"
                      aria-label="cake"
                      filter="drop-shadow(0 8px 16px rgba(0,0,0,0.2))"
                      style={{ animation: "bounce 2s ease-in-out infinite" }}
                    >
                      🍰
                    </Text>
                    <HStack gap={4}>
                      <Text fontSize="3xl" role="img" aria-label="cupcake">
                        🧁
                      </Text>
                      <Text
                        fontSize="3xl"
                        role="img"
                        aria-label="birthday cake"
                      >
                        🎂
                      </Text>
                      <Text fontSize="3xl" role="img" aria-label="donut">
                        🍩
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>

                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  color="white"
                  maxW="3xl"
                  lineHeight="tall"
                  fontWeight="medium"
                  textShadow="0 4px 8px rgba(0,0,0,0.2)"
                >
                  Discover delicious homemade cakes crafted with love and the
                  finest ingredients for every celebration 🎉
                </Text>

                <Stack direction={{ base: "column", sm: "row" }} gap={6} pt={6}>
                  <Button
                    bg="white"
                    color="gray.800"
                    size="lg"
                    px={12}
                    py={8}
                    fontSize="xl"
                    fontWeight="bold"
                    rounded="full"
                    _hover={{
                      transform: "translateY(-4px) scale(1.05)",
                      boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
                      bg: "gray.50",
                    }}
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    boxShadow="0 15px 35px rgba(0,0,0,0.15)"
                  >
                    <HStack gap={3}>
                      <Icon as={ShoppingCart} boxSize={6} />
                      <Text>Browse Our Cakes</Text>
                      <Icon as={ArrowRight} boxSize={6} />
                    </HStack>
                  </Button>

                  <Button
                    variant="outline"
                    borderColor="white"
                    color="white"
                    bg="whiteAlpha.200"
                    size="lg"
                    px={12}
                    py={8}
                    fontSize="xl"
                    fontWeight="bold"
                    rounded="full"
                    borderWidth="3px"
                    _hover={{
                      bg: "whiteAlpha.300",
                      transform: "translateY(-4px) scale(1.05)",
                      boxShadow: "0 25px 50px rgba(255,255,255,0.2)",
                    }}
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    backdropFilter="blur(20px)"
                  >
                    <HStack gap={3}>
                      <Icon as={Gift} boxSize={6} />
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
                OUR BESTSELLERS
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
              {cakes.map((cake, index) => (
                <Box
                  key={index}
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
                >
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    w="full"
                    h="280px"
                    objectFit="cover"
                  />
                  <Badge
                    position="absolute"
                    top={4}
                    right={4}
                    colorScheme={cake.badgeColor}
                    px={4}
                    py={2}
                    rounded="full"
                    fontSize="sm"
                    fontWeight="bold"
                    boxShadow="0 4px 12px rgba(0,0,0,0.15)"
                  >
                    {cake.badge}
                  </Badge>
                  <Box
                    position="absolute"
                    top={4}
                    left={4}
                    bg="whiteAlpha.900"
                    rounded="full"
                    p={2}
                    backdropFilter="blur(10px)"
                  >
                    <Icon as={Heart} boxSize={5} color="red.400" />
                  </Box>
                  <Box p={8}>
                    <VStack align="start" gap={4}>
                      <Heading
                        fontSize="2xl"
                        fontWeight="bold"
                        color="gray.800"
                      >
                        {cake.name}
                      </Heading>
                      <Text color="gray.600" fontSize="md" lineHeight="tall">
                        {cake.description}
                      </Text>
                      <HStack justify="space-between" w="full">
                        <Text
                          fontWeight="900"
                          fontSize="2xl"
                          color="purple.600"
                        >
                          {cake.price}
                        </Text>
                        <HStack gap={1}>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Icon
                              key={i}
                              as={Star}
                              color={
                                i < Math.round(cake.rating)
                                  ? "yellow.400"
                                  : "gray.300"
                              }
                              boxSize={5}
                              fill={
                                i < Math.round(cake.rating)
                                  ? "yellow.400"
                                  : "none"
                              }
                            />
                          ))}
                          <Text fontSize="sm" color="gray.500" ml={2}>
                            ({cake.reviews})
                          </Text>
                        </HStack>
                      </HStack>
                      <Separator />
                      <Button
                        bgGradient="linear(45deg, #FF6B6B, #4ECDC4)"
                        color="white"
                        size="lg"
                        w="full"
                        rounded="xl"
                        py={6}
                        fontSize="lg"
                        fontWeight="bold"
                        _hover={{
                          bgGradient: "linear(45deg, #FF5252, #26C6DA)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(255, 107, 107, 0.4)",
                        }}
                        transition="all 0.3s"
                      >
                        <HStack justify="center" gap={3}>
                          <Icon as={ShoppingCart} boxSize={5} />
                          <Text>Add to Cart</Text>
                        </HStack>
                      </Button>
                    </VStack>
                  </Box>
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
