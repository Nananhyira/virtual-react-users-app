import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddUserForm(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [gen, setGen] = useState("");
	const handleChange = (e) => {
		setGen(e.target.value);
		console.log(gen);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		props.newUser({ name, email, gen });
		setName("");
		setEmail("");
		setGen("");
	};
	return (
		<Form>
			<h1>this is the users form</h1>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Name </Form.Label>
				<Form.Control
					type="name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email </Form.Label>
				<Form.Control
					type="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Gen</Form.Label>
				<Form.Control type="Gen" value={gen} onChange={handleChange} />
			</Form.Group>

			<Button variant="primary" type="submit" onClick={handleSubmit}>
				Submit
			</Button>
		</Form>
	);
}

export default AddUserForm;
