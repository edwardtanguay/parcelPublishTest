import React from "react"
import ReactDOM from "react-dom"

const Hello = () => {

	const age = 12;
	const output = <span> James is {age} years old </span>;
	
	const customer = {
		first_name: 'Bob',
		last_name: 'Dylan'
	};

	return (
		<>
			<h1>Hello World</h1>
			<p>{output}</p>
			<p>{customer.first_name}</p>
		</>
	)
}

ReactDOM.render(<Hello />, document.getElementById("root"))