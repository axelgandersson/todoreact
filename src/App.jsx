import { Routes, Route, Link } from "react-router-dom";
import Board from "./components/Board";

function App() {
	return (
		<div>
			<h1>The Board App</h1>
			<nav style={{ marginBottom: "1rem" }}>
				<Link to="/">All</Link> | <Link to="/todo">Todo</Link> |{" "}
				<Link to="/doing">Doing</Link> | <Link to="/done">Done</Link>
			</nav>

			<Routes>
				<Route path="/" element={<Board />} />
				<Route path="/:columnId" element={<Board />} />
			</Routes>
		</div>
	);
}

export default App;
