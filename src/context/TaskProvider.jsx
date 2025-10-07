import { useEffect, useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { saveTasks } from "../logic/tasks";
import tasksReducer, { init } from "../logic/tasksReducer";

export function TaskProvider({ children }) {
	const [tasks, dispatch] = useReducer(tasksReducer, undefined, init);

	useEffect(() => {
		saveTasks(tasks);
	}, [tasks]);

	const addTask = (task) => dispatch({ type: "ADD", payload: task });
	const updateTask = (id, updates) =>
		dispatch({ type: "UPDATE", payload: { id, updates } });
	const deleteTask = (id) => dispatch({ type: "DELETE", payload: id });

	return (
		<TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
			{children}
		</TaskContext.Provider>
	);
}
