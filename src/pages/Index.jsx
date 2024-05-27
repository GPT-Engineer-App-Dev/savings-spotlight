import { Box, Container, Flex, Heading, HStack, Link, Text, VStack, Image, Divider, SimpleGrid } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">News</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Headline Section */}
      <Box bg="gray.100" p={8} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Main Headline Story</Heading>
        <Text fontSize="lg">This is a brief description of the main headline story. It captures the essence of the news and draws the reader in.</Text>
      </Box>

      {/* Latest News, Market Updates, Opinion Pieces */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} p={8}>
        <Box>
          <Heading as="h3" size="lg" mb={4}>Latest News</Heading>
          <VStack align="start" spacing={4}>
            <Text>News Item 1</Text>
            <Text>News Item 2</Text>
            <Text>News Item 3</Text>
          </VStack>
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={4}>Market Updates</Heading>
          <VStack align="start" spacing={4}>
            <Text>Market Update 1</Text>
            <Text>Market Update 2</Text>
            <Text>Market Update 3</Text>
          </VStack>
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={4}>Opinion Pieces</Heading>
          <VStack align="start" spacing={4}>
            <Text>Opinion Piece 1</Text>
            <Text>Opinion Piece 2</Text>
            <Text>Opinion Piece 3</Text>
          </VStack>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box bg="gray.800" color="white" p={8} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaLinkedin /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;