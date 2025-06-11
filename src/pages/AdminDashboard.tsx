import {
  Box,
  Heading,
  Text,
  Grid,
  Flex,
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
                <Text fontSize="sm" color="gray.600" noOfLines={2}>
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

      <Modal open={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="xl">
          <ModalHeader>
            {editId !== null ? "Edit Product" : "Add Product"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack gap={3}>
              <Input
                placeholder="Product Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Input
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
              <Input
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </Stack>
          </ModalBody>
          <ModalFooter gap={2}>
            <Button onClick={onClose} variant="ghost">
              Cancel
            </Button>
            <Button onClick={handleSubmit} colorScheme="pink">
              {editId !== null ? "Update" : "Create"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminDashboardPage;
