import { loadTasks } from "./tasks";

export const actionTypes = {
	SET: "SET",
	ADD: "ADD",
	UPDATE: "UPDATE",
	DELETE: "DELETE",
};

export function tasksReducer(state, action) {
	switch (action.type) {
		case actionTypes.SET:
			return action.payload;
		case actionTypes.ADD:
			return [...state, action.payload];
		case actionTypes.UPDATE:
			return state.map((t) =>
				t.id === action.payload.id ? { ...t, ...action.payload.updates } : t
			);
		case actionTypes.DELETE:
			return state.filter((t) => t.id !== action.payload);
		default:
			return state;
	}
}

export const init = loadTasks;

export default tasksReducer;
