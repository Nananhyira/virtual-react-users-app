import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function EditUserForm(props) {
	const [name, setName] = useState(props.userInfo.name);
	const [email, setEmail] = useState(props.userInfo.email);
	const [gen, setGen] = useState(props.userInfo.gen);
	const handleChange = (e) => {
		setGen(e.target.value);
		// console.log(gen);
	};
	const handleEditSubmit = (e) => {
		e.preventDefault();
		props.EditUser(props.userInfo.id, { email, name, gen });
		setName("");
		setEmail("");
		setGen("");
		props.hide();
	};
	return (
		<Form>
			<h1>Edit users form</h1>
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

			<Button variant="primary" type="submit" onClick={handleEditSubmit}>
				Submit
			</Button>
		</Form>
	);
}

export default EditUserForm;
