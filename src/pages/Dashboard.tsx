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
} from "@chakra-ui/react";
import { FaStar, FaHeart, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const cakes = [
  {
    name: "Chocolate Heaven",
    image:
      "https://images.unsplash.com/photo-1612197593458-c0a9e5c507e2?auto=format&fit=crop&w=800&q=80",
    price: "$28.99",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
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
    description: "Fresh strawberry cake with cream cheese frosting",
  },
];

const Dashboard: React.FC = () => {
  return (
    <Flex direction="column" minH="100vh" bg="white">
      <Navbar />

      <Box flex="1">
        {/* Hero Section */}
        <Box
          bgGradient="linear(135deg, pink.400 0%, purple.500 50%, orange.400 100%)"
          py={{ base: 20, md: 32 }}
          px={{ base: 4, md: 8 }}
          textAlign="center"
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top="-50%"
            left="-50%"
            w="200%"
            h="200%"
            bgGradient="radial(circle, whiteAlpha.100 1px, transparent 1px)"
            backgroundSize="50px 50px"
            opacity={0.3}
          />

          <Container maxW="5xl" position="relative" zIndex={1}>
            <VStack gap={8}>
              <Badge
                bg="whiteAlpha.300"
                color="black"
                px={6}
                py={3}
                rounded="full"
                fontSize="sm"
                fontWeight="bold"
                backdropFilter="blur(10px)"
                border="2px solid"
                borderColor="whiteAlpha.400"
                textShadow="0 1px 2px rgba(255,255,255,0.3)"
              >
                ✨ Handcrafted Since 2020
              </Badge>

              <VStack gap={6}>
                <Heading
                  fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                  fontWeight="900"
                  color="black"
                  lineHeight="0.9"
                  textShadow="0 4px 20px rgba(255,255,255,0.5)"
                >
                  Welcome to
                  <br />
                  CakeStore
                </Heading>
                <Text
                  fontSize="6xl"
                  role="img"
                  aria-label="cake"
                  filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                >
                  🍰
                </Text>
              </VStack>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="black"
                maxW="2xl"
                lineHeight="tall"
                fontWeight="medium"
                textShadow="0 2px 4px rgba(255,255,255,0.3)"
              >
                Discover delicious homemade cakes crafted with love and the
                finest ingredients for every celebration
              </Text>

              <Stack direction={{ base: "column", sm: "row" }} gap={4} pt={4}>
                <Button
                  bg="black"
                  color="white"
                  size="lg"
                  px={10}
                  py={7}
                  fontSize="lg"
                  fontWeight="bold"
                  rounded="full"
                  leftIcon={<Icon as={FaShoppingCart} />}
                  rightIcon={<Icon as={FaArrowRight} />}
                  _hover={{
                    transform: "translateY(-3px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    bg: "gray.800",
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  boxShadow="0 10px 30px rgba(0,0,0,0.2)"
                >
                  Browse Our Cakes
                </Button>

                <Button
                  variant="outline"
                  borderColor="black"
                  color="black"
                  bg="whiteAlpha.200"
                  size="lg"
                  px={10}
                  py={7}
                  fontSize="lg"
                  fontWeight="bold"
                  rounded="full"
                  borderWidth="2px"
                  leftIcon={<Icon as={FaHeart} />}
                  _hover={{
                    bg: "whiteAlpha.300",
                    transform: "translateY(-3px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  backdropFilter="blur(10px)"
                >
                  Custom Orders
                </Button>
              </Stack>
            </VStack>
          </Container>
        </Box>

        {/* Product Grid */}
        <Container maxW="6xl" py={16} px={4}>
          <Heading fontSize="3xl" mb={10} fontWeight="bold" textAlign="center">
            Our Signature Cakes
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
            {cakes.map((cake, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderColor="gray.200"
                rounded="lg"
                overflow="hidden"
                boxShadow="md"
                _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}
                transition="0.3s"
              >
                <Image
                  src={cake.image}
                  alt={cake.name}
                  w="full"
                  h="250px"
                  objectFit="cover"
                />

                <Box p={6}>
                  <HStack justify="space-between" mb={2}>
                    <Heading fontSize="xl" fontWeight="bold">
                      {cake.name}
                    </Heading>
                    <Badge colorScheme="pink">{cake.badge}</Badge>
                  </HStack>

                  <Text color="gray.600" fontSize="sm" mb={4}>
                    {cake.description}
                  </Text>

                  <HStack justify="space-between" mb={4}>
                    <Text fontWeight="bold" fontSize="lg">
                      {cake.price}
                    </Text>

                    <HStack spacing={1}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon
                          key={i}
                          as={FaStar}
                          color={
                            i < Math.round(cake.rating)
                              ? "yellow.400"
                              : "gray.300"
                          }
                          boxSize={4}
                        />
                      ))}
                      <Text fontSize="sm" color="gray.500">
                        ({cake.reviews})
                      </Text>
                    </HStack>
                  </HStack>

                  <Button
                    colorScheme="pink"
                    variant="solid"
                    size="md"
                    w="full"
                    leftIcon={<Icon as={FaShoppingCart} />}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Footer />
    </Flex>
  );
};

export default Dashboard;
