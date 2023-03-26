import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
	const [initialValue, setInitialValue] = useState(0);

	return (
		<div className="App">
			<h1>Vite + React</h1>
			<Counter initialValue={initialValue} />
		</div>
	);
}

export default App;
