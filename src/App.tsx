import { Button, HStack } from "@chakra-ui/react";
import NavBar from "./components/app/navbar";

function App() {
  return (
    <>
      <NavBar />
      <HStack gap={4} p={4}>
        <Button colorScheme="blue">Click me</Button>
        <Button colorScheme="teal">Click me</Button>
      </HStack>
    </>
  );
}

export default App;
