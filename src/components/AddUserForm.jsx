import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { reduxNewUser } from "../actions/usersAtions";
import { connect, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/Config";

function AddUserForm(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [gen, setGen] = useState("");
	const dispatch = useDispatch();
	const handleChange = (e) => {
		setGen(e.target.value);
		console.log(gen);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		// props.newUser({ name, email, gen });
		// props.reduxNewUser({ name, email, gen });
		// dispatch(reduxNewUser({ id: uuid(), name, email, gen }));
		let newUser = { id: uuid(), name, email, gen };
		console.log({ id: uuid(), name, email, gen });
		try {
			await setDoc(doc(db, "virtual-users", newUser.id), newUser);
		} catch (e) {
			console.log(e);
		}

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

// const mapDispatchToProps = {
// 	reduxNewUser,
// };
// export default connect(null, mapDispatchToProps)(AddUserForm);

export default AddUserForm;
