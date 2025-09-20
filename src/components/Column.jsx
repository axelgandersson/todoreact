import { useTaskContext } from "../context/useTaskContext";
import TaskCard from "./TaskCard";

function Column({ status }) {
	const { tasks, addTask } = useTaskContext();
	const filtered = tasks.filter((t) => t.status === status);

	const handleAdd = () => {
		const title = prompt("Ny uppgift:");
		if (title) {
			addTask({
				id: Date.now(),
				title,
				status,
				date: new Date().toISOString().slice(0, 10),
			});
		}
	};

	return (
		<div
			style={{
				background: "#ddd",
				padding: "1rem",
				borderRadius: "8px",
				minWidth: "200px",
			}}
		>
			<h2>{status.toUpperCase()}</h2>
			{filtered.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
			<button onClick={handleAdd}>+ Skapa ny uppgift</button>
		</div>
	);
}

export default Column;
