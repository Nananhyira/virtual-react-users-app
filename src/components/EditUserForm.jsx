import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { reduxEditUser } from "../actions/usersAtions.js";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/Config";

function EditUserForm(props) {
	const [name, setName] = useState(props.userInfo.name);
	const [email, setEmail] = useState(props.userInfo.email);
	const [gen, setGen] = useState(props.userInfo.gen);
	const handleChange = (e) => {
		setGen(e.target.value);
		// console.log(gen);
	};
	const handleEditSubmit = async (e) => {
		e.preventDefault();
		let newInfo = { id: props.userInfo.id, email, name, gen };

		const editingUser = doc(db, "v-users", props.userInfo.id);
		// Set the "capital" field of the city 'DC'
		await updateDoc(editingUser, newInfo);

		// props.reduxEditUser(newInfo);
		// props.EditUser(props.userInfo.id, { email, name, gen });
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
const mapDispatchToProps = {
	reduxEditUser,
};

export default connect(null, mapDispatchToProps)(EditUserForm);
