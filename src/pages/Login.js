import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/Config";
import { useNavigate } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const provider = new GoogleAuthProvider();
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			navigate("/", { replace: true });
			console.log(user);
		} catch (e) {
			console.log(e);
		}
		setEmail("");
		setPassword("");
	};

	const google = async (e) => {
		e.preventDefault();
		try {
			const user = await signInWithPopup(auth, provider);

			console.log(user);
		} catch (e) {
			console.log(e);
		}
		setEmail("");
		setPassword("");
	};
	return (
		<Form>
			<h1>Please login here </h1>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					value={password}
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Form.Group>
			<Button variant="primary" type="submit" onClick={handleLogin}>
				Submit
			</Button>

			<Button variant="info" onClick={google}>
				login with google
			</Button>
		</Form>
	);
}

export default Login;
