import { Box, Heading, Text, Grid, Flex } from "@chakra-ui/react";
import Navbar from "../components/app/navbar";
import Footer from "../components/app/Footer";

const AdminDashboardPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box p={6}>
        <Heading fontSize="2xl" mb={4}>
          Dashboard
        </Heading>

        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
          <Flex
            direction="column"
            bg="pink.100"
            p={6}
            borderRadius="xl"
            boxShadow="md"
          >
            <Text fontWeight="medium">Users</Text>
            <Text fontSize="2xl" fontWeight="bold">
              1024
            </Text>
          </Flex>

          <Flex
            direction="column"
            bg="green.100"
            p={6}
            borderRadius="xl"
            boxShadow="md"
          >
            <Text fontWeight="medium">Revenue</Text>
            <Text fontSize="2xl" fontWeight="bold">
              $8,400
            </Text>
          </Flex>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default AdminDashboardPage;
