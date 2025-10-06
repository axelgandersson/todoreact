import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { TaskProvider } from "./context/TaskProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider>
			<BrowserRouter>
				<TaskProvider>
					<App />
				</TaskProvider>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
);
