import { useState } from "react";
import { TaskContext } from "./TaskContext";

export function TaskProvider({ children }) {
	const [tasks, setTasks] = useState([
		{ id: 1, title: "Vattna blommorna", status: "todo" },
		{ id: 2, title: "Slänga soporna", status: "todo" },
		{ id: 3, title: "Kolla på TV", status: "doing" },
		{ id: 4, title: "Bygga en ny app", status: "done" },
	]);

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
