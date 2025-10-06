import { Routes, Route, Link as RouterLink } from "react-router-dom";
import { Box, Heading, HStack, Link as ChakraLink } from "@chakra-ui/react";
import Board from "./components/Board";

function App() {
	return (
		<Box p={6} maxW="1200px" mx="auto">
			<Heading as="h1" mb={4} size="lg">
				The Board App
			</Heading>

			<HStack spacing={4} mb={6}>
				<ChakraLink as={RouterLink} to="/">
					All
				</ChakraLink>
				<ChakraLink as={RouterLink} to="/todo">
					Todo
				</ChakraLink>
				<ChakraLink as={RouterLink} to="/doing">
					Doing
				</ChakraLink>
				<ChakraLink as={RouterLink} to="/done">
					Done
				</ChakraLink>
			</HStack>

			<Routes>
				<Route path="/" element={<Board />} />
				<Route path="/:columnId" element={<Board />} />
			</Routes>
		</Box>
	);
}

export default App;
