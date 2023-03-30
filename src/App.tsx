import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Pokemon from "./Pokemon";

function App() {
	const [initialValue, setInitialValue] = useState(0);

	return (
		<div className="App">
			<div className="Counter">
				<h1>Vite + React</h1>
				<Counter initialValue={initialValue} />
			</div>
			<Pokemon />
		</div>
	);
}

export default App;
