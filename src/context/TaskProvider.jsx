import { useState, useEffect } from "react";
import { TaskContext } from "./TaskContext";
import { loadTasks, saveTasks } from "../logic/tasks";

export function TaskProvider({ children }) {
	const [tasks, setTasks] = useState(() => loadTasks());

	useEffect(() => {
		saveTasks(tasks);
	}, [tasks]);

	const addTask = (task) => setTasks((prev) => [...prev, task]);
	const updateTask = (id, updates) =>
		setTasks((prev) =>
			prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
		);
	const deleteTask = (id) =>
		setTasks((prev) => prev.filter((t) => t.id !== id));

	return (
		<TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
			{children}
		</TaskContext.Provider>
	);
}
