import { useTaskContext } from "../context/useTaskContext";

function TaskCard({ task }) {
	const { updateTask, deleteTask } = useTaskContext();
	const moveLeft = { doing: "todo", done: "doing" };
	const moveRight = { todo: "doing", doing: "done" };

	return (
		<div
			style={{
				background: "white",
				padding: "0.5rem",
				margin: "0.5rem 0",
				borderRadius: "4px",
			}}
		>
			<strong>{task.title}</strong>
			<p>{task.date}</p>
			<div>
				{moveLeft[task.status] && (
					<button
						onClick={() =>
							updateTask(task.id, { status: moveLeft[task.status] })
						}
					>
						←
					</button>
				)}
				{moveRight[task.status] && (
					<button
						onClick={() =>
							updateTask(task.id, { status: moveRight[task.status] })
						}
					>
						→
					</button>
				)}
				<button onClick={() => deleteTask(task.id)}>🗑️</button>
			</div>
		</div>
	);
}

export default TaskCard;
