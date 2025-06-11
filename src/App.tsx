// App.tsx
"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Dashboard />
    </ChakraProvider>
  );
}

export default App;
