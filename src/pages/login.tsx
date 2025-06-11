import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="linear-gradient(to right, #ffe4e6, #fbcfe8)"
      p={4}
    >
      <Card maxW="md" w="full" boxShadow="lg" borderRadius="2xl">
        <CardBody p={8}>
          <Stack gap={6}>
            <Heading fontSize="2xl" textAlign="center">
              Sign In to Your Account
            </Heading>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="you@example.com" />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                />
                <InputRightElement>
                  <IconButton
                    variant="ghost"
                    size="sm"
                    onClick={togglePassword}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    _icon={{
                      as: showPassword ? EyeOff : Eye,
                    }}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              colorScheme="pink"
              size="lg"
              borderRadius="xl"
              startIcon={<LogIn size={18} />}
            >
              Log In
            </Button>

            <Text textAlign="center" fontSize="sm" color="gray.600">
              Don't have an account? <u>Sign up</u>
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
