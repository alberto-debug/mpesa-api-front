import {
  Box,
  Heading,
  Text,
  Grid,
  Flex,
  VStack,
  HStack,
  Button,
  Stack,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/modal";

import Navbar from "../components/app/navbar";
import Footer from "../components/app/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

type ProductResponseDTO = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type ProductRequestDTO = {
  name: string;
  description: string;
  price: number;
};

const AdminDashboardPage: React.FC = () => {
  const [products, setProducts] = useState<ProductResponseDTO[]>([]);
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [editId, setEditId] = useState<number | null>(null);

  const { open, onOpen, onClose } = useDisclosure();

  const API_BASE = "http://localhost:8080/api/products";

  const fetchProducts = async () => {
    const res = await axios.get<ProductResponseDTO[]>(API_BASE);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async () => {
    const dto: ProductRequestDTO = {
      name: form.name,
      description: form.description,
      price: parseFloat(form.price),
    };

    if (editId !== null) {
      await axios.put(`${API_BASE}/${editId}`, dto);
    } else {
      await axios.post(API_BASE, dto);
    }

    onClose();
    setEditId(null);
    setForm({ name: "", description: "", price: "" });
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`${API_BASE}/${id}`);
    fetchProducts();
  };

  const handleEdit = (product: ProductResponseDTO) => {
    setEditId(product.id);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
    });
    onOpen();
  };

  return (
    <>
      <Navbar />
      <Flex direction="column" minH="100vh" justify="space-between">
        <Box flex="1" p={6}>
          <Heading fontSize="2xl" mb={4}>
            Admin Dashboard
          </Heading>

          <Flex mb={4} justify="space-between">
            <Heading size="md">Products</Heading>
            <Button onClick={onOpen} colorScheme="pink" size="sm">
              Add Product
            </Button>
          </Flex>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
            {products.map((product) => (
              <Box
                key={product.id}
                bg="gray.100"
                borderRadius="xl"
                p={4}
                boxShadow="sm"
              >
                <Text fontWeight="bold">{product.name}</Text>
                <Text fontSize="sm" color="gray.600" lineClamp={2}>
                  {product.description}
                </Text>
                <Text color="green.600" mt={2}>
                  ${product.price}
                </Text>

                <Flex gap={2} mt={3}>
                  <Button
                    size="sm"
                    onClick={() => handleEdit(product)}
                    colorScheme="blue"
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleDelete(product.id)}
                    colorScheme="red"
                  >
                    Delete
                  </Button>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>

        <Footer />
      </Flex>
      <Modal
        isOpen={open}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay
          bg="blackAlpha.600"
          backdropFilter="blur(10px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        />
        <ModalContent
          bg="transparent"
          boxShadow="none"
          maxW="480px"
          mx="auto"
          my="auto"
        >
          <Box
            bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            borderRadius="2xl"
            p={1}
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "2xl",
              padding: "2px",
              background:
                "linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "exclude",
              zIndex: -1,
            }}
          >
            <Box
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              position="relative"
            >
              {/* Rest of your modal content stays the same */}
              {/* Decorative top section */}
              <Box
                h="80px"
                bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  position="absolute"
                  top="-20px"
                  right="-20px"
                  w="60px"
                  h="60px"
                  bg="whiteAlpha.200"
                  borderRadius="full"
                />
                <Box
                  position="absolute"
                  bottom="-10px"
                  left="-10px"
                  w="40px"
                  h="40px"
                  bg="whiteAlpha.300"
                  borderRadius="full"
                />

                <VStack spacing={1}>
                  <Text fontSize="2xl" role="img" aria-label="sparkles">
                    ✨
                  </Text>
                  <Text color="white" fontWeight="bold" fontSize="lg">
                    {editId !== null ? "Edit Product" : "New Product"}
                  </Text>
                </VStack>
              </Box>

              <ModalCloseButton
                color="white"
                top={4}
                right={4}
                bg="whiteAlpha.200"
                borderRadius="full"
                _hover={{ bg: "whiteAlpha.300" }}
              />

              {/* Form section */}
              <Box p={8}>
                <VStack spacing={6}>
                  <Box w="full">
                    <HStack mb={2}>
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color="gray.700"
                      >
                        🏷️ Product Name
                      </Text>
                    </HStack>
                    <Input
                      placeholder="Enter a catchy name..."
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      bg="gray.50"
                      border="2px solid"
                      borderColor="gray.100"
                      borderRadius="xl"
                      py={6}
                      fontSize="md"
                      _focus={{
                        borderColor: "purple.400",
                        bg: "white",
                        boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.1)",
                      }}
                      _hover={{ borderColor: "gray.200" }}
                    />
                  </Box>

                  <Box w="full">
                    <HStack mb={2}>
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color="gray.700"
                      >
                        📝 Description
                      </Text>
                    </HStack>
                    <Input
                      placeholder="Describe your amazing product..."
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      bg="gray.50"
                      border="2px solid"
                      borderColor="gray.100"
                      borderRadius="xl"
                      py={6}
                      fontSize="md"
                      _focus={{
                        borderColor: "purple.400",
                        bg: "white",
                        boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.1)",
                      }}
                      _hover={{ borderColor: "gray.200" }}
                    />
                  </Box>

                  <Box w="full">
                    <HStack mb={2}>
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color="gray.700"
                      >
                        💰 Price
                      </Text>
                    </HStack>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={form.price}
                      onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                      }
                      bg="gray.50"
                      border="2px solid"
                      borderColor="gray.100"
                      borderRadius="xl"
                      py={6}
                      fontSize="md"
                      _focus={{
                        borderColor: "purple.400",
                        bg: "white",
                        boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.1)",
                      }}
                      _hover={{ borderColor: "gray.200" }}
                    />
                  </Box>
                </VStack>
              </Box>

              {/* Action buttons */}
              <Box px={8} pb={8}>
                <HStack spacing={3}>
                  <Button
                    onClick={onClose}
                    flex={1}
                    bg="gray.100"
                    color="gray.600"
                    borderRadius="xl"
                    py={6}
                    fontWeight="semibold"
                    _hover={{
                      bg: "gray.200",
                      transform: "translateY(-1px)",
                    }}
                    transition="all 0.2s"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    flex={1}
                    bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                    color="white"
                    borderRadius="xl"
                    py={6}
                    fontWeight="semibold"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
                    }}
                    _active={{
                      transform: "translateY(0px)",
                    }}
                    transition="all 0.2s"
                  >
                    {editId !== null ? "✨ Update" : "🚀 Create"}
                  </Button>
                </HStack>
              </Box>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminDashboardPage;
