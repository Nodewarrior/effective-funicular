import React, { useState } from "react";

interface Props {
	initialValue: number;
}

function Counter({ initialValue }: Props) {
	const [count, setCount] = useState(initialValue);

	const addCount = () => {
		setCount(count + 1);
	};

	const decCount = () => {
		if (count <= 0) return;
		setCount(count - 1);
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				marginLeft: 40,
				maxHeight: "90px",
			}}
		>
			<button onClick={decCount}>
				<h2>-</h2>
			</button>

			<h2 style={{ margin: "30px 10px" }}>{count}</h2>

			<button onClick={addCount}>
				<h2>+</h2>
			</button>
		</div>
	);
}

export default Counter;
