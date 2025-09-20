import { useParams } from "react-router-dom";
import Column from "./Column";

const columns = ["todo", "doing", "done"];

function Board() {
	const { columnId } = useParams();
	const visibleColumns = columnId ? [columnId] : columns;

	return (
		<div style={{ display: "flex", gap: "1rem" }}>
			{visibleColumns.map((col) => (
				<Column key={col} status={col} />
			))}
		</div>
	);
}

export default Board;
