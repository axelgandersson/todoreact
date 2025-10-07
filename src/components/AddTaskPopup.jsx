import { useEffect, useRef, useState } from "react";
import {
	Portal,
	Box,
	VStack,
	HStack,
	Input,
	Select,
	Button,
	Text,
} from "@chakra-ui/react";

function AddTaskPopup({ isOpen, onClose, defaultStatus = "todo", onAdd }) {
	const [title, setTitle] = useState("");
	const [status, setStatus] = useState(defaultStatus);
	const ref = useRef(null);

	useEffect(() => {
		if (isOpen) {
			setTitle("");
			setStatus(defaultStatus);
			// focus next tick
			setTimeout(() => ref.current?.focus?.(), 0);
		}
	}, [isOpen, defaultStatus]);

	function submit() {
		const t = (title || "").trim();
		if (!t) return;
		onAdd({ title: t, status });
		onClose();
	}

	function onKeyDown(e) {
		if (e.key === "Enter") {
			e.preventDefault();
			submit();
		}
	}

	if (!isOpen) return null;

	return (
		<Portal>
			<Box
				position="fixed"
				inset={0}
				bg="rgba(0,0,0,0.3)"
				display="flex"
				alignItems="center"
				justifyContent="center"
				zIndex={50}
				onClick={onClose}
			>
				<Box
					bg="white"
					minW={{ base: "90%", md: "320px" }}
					borderRadius="8px"
					p={4}
					boxShadow="lg"
					onClick={(e) => e.stopPropagation()}
				>
					<VStack align="stretch" spacing={3}>
						<Text fontWeight="semibold">Ny uppgift</Text>
						<Input
							ref={ref}
							placeholder="Titel"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							onKeyDown={onKeyDown}
						/>

						{defaultStatus !== "todo" && (
							<Select
								value={status}
								onChange={(e) => setStatus(e.target.value)}
							>
								<option value="todo">todo</option>
								<option value="doing">doing</option>
								<option value="done">done</option>
							</Select>
						)}

						<HStack justify="flex-end">
							<Button variant="ghost" onClick={onClose} size="sm">
								Avbryt
							</Button>
							<Button colorScheme="teal" onClick={submit} size="sm">
								Lägg till
							</Button>
						</HStack>
					</VStack>
				</Box>
			</Box>
		</Portal>
	);
}

export default AddTaskPopup;
