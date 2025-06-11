import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  IconButton,
  Input,
  Flex,
} from "@chakra-ui/react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/app/navbar"; // Adjust import path based on your project structure
import Footer from "../components/app/Footer";

interface AdminLoginProps {}

const AdminLoginPage: React.FC<AdminLoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const toggleShowPassword = () => setShowPassword(!showPassword);

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
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post<{ token: string; username: string }>(
        "http://localhost:8080/admin/login",
        { email, password },
      );

      alert("Login successful!");
      sessionStorage.setItem("auth-token", response.data.token);
      sessionStorage.setItem("username", response.data.username);
      navigate("/admin/dashboard");
    } catch (error: any) {
      if (
        error.response?.status === 401 &&
        error.response?.data === "Invalid credentials"
      ) {
        setPasswordError(true);
        alert("Incorrect password. Please try again.");
      } else if (
        error.response?.status === 404 &&
        error.response?.data === "User not found"
      ) {
        setEmailError(true);
        alert("No account found with this email.");
      } else {
        alert("Login failed. Please try again later.");
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
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </IconButton>
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

          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default AdminLoginPage;
