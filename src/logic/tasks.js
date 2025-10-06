const STORAGE_KEY = "todoreact.tasks";

export const initialTasks = [
	{ id: 1, title: "Vattna blommorna", status: "todo" },
	{ id: 2, title: "Slänga soporna", status: "todo" },
	{ id: 3, title: "Kolla på TV", status: "doing" },
	{ id: 4, title: "Bygga en ny app", status: "done" },
];

export function loadTasks(fallback = initialTasks) {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : fallback;
	} catch (e) {
		console.warn("Failed to read tasks from localStorage", e);
		return fallback;
	}
}

export function saveTasks(tasks) {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
	} catch (e) {
		console.warn("Failed to write tasks to localStorage", e);
	}
}

export function createTask({ title, status }) {
	return {
		id: Date.now(),
		title,
		status,
		date: new Date().toISOString().slice(0, 10),
	};
}

export default {
	STORAGE_KEY,
	initialTasks,
	loadTasks,
	saveTasks,
	createTask,
};
