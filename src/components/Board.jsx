import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Column from "./Column";

const columns = ["todo", "doing", "done"];

function Board() {
	const { columnId } = useParams();
	const visibleColumns = columnId ? [columnId] : columns;

	return (
		<Flex gap={4} align="flex-start" wrap={{ base: "wrap", md: "nowrap" }}>
			{visibleColumns.map((col) => (
				<Column key={col} status={col} />
			))}
		</Flex>
	);
}

export default Board;
