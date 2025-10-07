import { useState } from "react";
import { useTaskContext } from "../context/useTaskContext";
import { createTask } from "../logic/tasks";
import TaskCard from "./TaskCard";
import AddTaskPopup from "./AddTaskPopup";
import { Box, Heading, VStack, Button, Text } from "@chakra-ui/react";

function Column({ status }) {
	const { tasks, addTask } = useTaskContext();
	const filtered = tasks.filter((t) => t.status === status);
	const [isOpen, setIsOpen] = useState(false);

	const handleAdd = () => setIsOpen(true);

	const handleAddConfirm = ({ title, status: pickedStatus }) => {
		const task = createTask({ title, status: pickedStatus });
		addTask(task);
	};

	return (
		<Box
			bg="gray.100"
			p={4}
			borderRadius="md"
			minW={{ base: "100%", md: "240px" }}
		>
			<Heading as="h3" size="sm" mb={3} textTransform="uppercase">
				{status}
			</Heading>

			<VStack align="stretch" spacing={3} mb={3}>
				{filtered.map((task) => (
					<TaskCard key={task.id} task={task} />
				))}
				{filtered.length === 0 && (
					<Text color="gray.500">Inga uppgifter här ännu.</Text>
				)}
			</VStack>

			{status === "todo" && (
				<>
					<Button size="sm" colorScheme="teal" onClick={handleAdd} width="full">
						+ Skapa ny uppgift
					</Button>

					<AddTaskPopup
						isOpen={isOpen}
						onClose={() => setIsOpen(false)}
						defaultStatus={status}
						onAdd={handleAddConfirm}
					/>
				</>
			)}
		</Box>
	);
}

export default Column;
