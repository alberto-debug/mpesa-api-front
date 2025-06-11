import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  IconButton,
  Input,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/modal";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/app/navbar";
import Footer from "../components/app/Footer";

const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const { open, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const showErrorModal = (message: string) => {
    setModalMessage(message);
    onOpen();
  };

  const handleAdminLogin = async () => {
    let hasError = false;

    if (!email) {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }

    if (hasError) {
      showErrorModal("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post<{ token: string; username: string }>(
        "http://localhost:8080/admin/login",
        { email, password },
      );

      sessionStorage.setItem("auth-token", response.data.token);
      sessionStorage.setItem("username", response.data.username);
      navigate("/admin/dashboard");
    } catch (error: any) {
      if (
        error.response?.status === 401 &&
        error.response?.data === "Invalid credentials"
      ) {
        setPasswordError(true);
        showErrorModal("Incorrect password. Please try again.");
      } else if (
        error.response?.status === 404 &&
        error.response?.data === "User not found"
      ) {
        setEmailError(true);
        showErrorModal("No account found with this email.");
      } else {
        showErrorModal("Login failed. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg="gray.50"
        px={4}
        py={12}
      >
        <Box
          w="full"
          maxW="md"
          bg="white"
          borderRadius="2xl"
          boxShadow="xl"
          p={8}
          border="1px solid"
          borderColor="gray.200"
        >
          <Stack gap={6}>
            <Heading fontSize="2xl" textAlign="center" color="gray.800">
              Admin Login
            </Heading>

            <Stack gap={2}>
              <Text fontWeight="medium">Email address</Text>
              <Input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderColor={emailError ? "red.500" : "gray.200"}
                _focusVisible={{
                  borderColor: emailError ? "red.500" : "pink.500",
                }}
              />
            </Stack>

            <Stack gap={2}>
              <Text fontWeight="medium">Password</Text>
              <Box position="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  pr="3rem"
                  borderColor={passwordError ? "red.500" : "gray.200"}
                  _focusVisible={{
                    borderColor: passwordError ? "red.500" : "pink.500",
                  }}
                />
                <IconButton
                  aria-label="Toggle password visibility"
                  variant="ghost"
                  size="sm"
                  position="absolute"
                  top="50%"
                  right="0.5rem"
                  transform="translateY(-50%)"
                  onClick={toggleShowPassword}
                  _icon={{
                    boxSize: 4,
                  }}
                />
              </Box>
            </Stack>

            <Button
              colorScheme="pink"
              size="lg"
              borderRadius="xl"
              gap={2}
              onClick={handleAdminLogin}
              loading={loading}
            >
              <LogIn size={18} />
              Log In
            </Button>

            <Text textAlign="center" fontSize="sm" color="gray.600">
              Don&apos;t have an account? <u>Sign up</u>
            </Text>
          </Stack>
        </Box>
      </Flex>

      <Footer />

      {/* Error Modal */}
      <Modal isOpen={open} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="xl">
          <ModalHeader color="red.500">Login Error</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{modalMessage}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="pink" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminLoginPage;
