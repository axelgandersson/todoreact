import { useTaskContext } from "../context/useTaskContext";
import {
	Box,
	HStack,
	VStack,
	Text,
	IconButton,
	Spacer,
} from "@chakra-ui/react";

function TaskCard({ task }) {
	const { updateTask, deleteTask } = useTaskContext();
	const moveLeft = { doing: "todo", done: "doing" };
	const moveRight = { todo: "doing", doing: "done" };

	return (
		<Box bg="white" p={3} borderRadius="md" boxShadow="sm">
			<HStack align="start">
				<VStack align="start" spacing={0}>
					<Text fontWeight="semibold">{task.title}</Text>
					{task.date && (
						<Text fontSize="sm" color="gray.500">
							{task.date}
						</Text>
					)}
				</VStack>

				<Spacer />

				<HStack spacing={1}>
					{moveLeft[task.status] && (
						<IconButton
							size="sm"
							aria-label="Move left"
							icon={<Text as="span">←</Text>}
							onClick={() =>
								updateTask(task.id, { status: moveLeft[task.status] })
							}
						/>
					)}
					{moveRight[task.status] && (
						<IconButton
							size="sm"
							aria-label="Move right"
							icon={<Text as="span">→</Text>}
							onClick={() =>
								updateTask(task.id, { status: moveRight[task.status] })
							}
						/>
					)}
					<IconButton
						size="sm"
						colorScheme="red"
						aria-label="Delete"
						icon={<Text as="span">✖</Text>}
						onClick={() => deleteTask(task.id)}
					/>
				</HStack>
			</HStack>
		</Box>
	);
}

export default TaskCard;
