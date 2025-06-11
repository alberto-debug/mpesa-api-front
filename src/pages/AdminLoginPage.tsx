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
import Navbar from "../components/app/navbar";
import Footer from "../components/app/Footer";

const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [popup, setPopup] = useState<{
    message: string;
    status: "error" | "success";
  }>({ message: "", status: "error" });
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const showPopupMsg = (
    message: string,
    status: "error" | "success" = "error",
  ) => {
    setPopup({ message, status });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3500);
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
      showPopupMsg("Please fill in all fields.", "error");
      return;
    }

    setLoading(true);

    try {
      const resp = await axios.post<{ token: string; username: string }>(
        "http://localhost:8080/admin/login",
        { email, password },
      );
      sessionStorage.setItem("auth-token", resp.data.token);
      sessionStorage.setItem("username", resp.data.username);

      showPopupMsg("Login successful!", "success");
      navigate("/admin/dashboard");
    } catch (err: any) {
      if (
        err.response?.status === 401 &&
        err.response.data === "Invalid credentials"
      ) {
        setPasswordError(true);
        showPopupMsg("Incorrect password.", "error");
      } else if (
        err.response?.status === 404 &&
        err.response.data === "User not found"
      ) {
        setEmailError(true);
        showPopupMsg("User not found.", "error");
      } else {
        showPopupMsg("Login failed. Try again later.", "error");
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
              Don’t have an account? <u>Sign up</u>
            </Text>
          </Stack>
        </Box>
      </Flex>

      <Footer />

      {/* Popup message */}
      {showPopup && (
        <Box
          position="fixed"
          bottom="4rem"
          left="50%"
          transform="translateX(-50%)"
          bg={popup.status === "error" ? "red.500" : "green.500"}
          px={6}
          py={4}
          borderRadius="lg"
          boxShadow="xl"
          zIndex={9999}
          minW="xs"
          maxW="sm"
          textAlign="center"
        >
          <Text color="white" fontWeight="medium">
            {popup.message}
          </Text>
        </Box>
      )}
    </>
  );
};

export default AdminLoginPage;
