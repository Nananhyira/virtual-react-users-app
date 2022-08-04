import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SeeAllusers from "./components/SeeAllusers";
import AddUserForm from "./components/AddUserForm";

function App() {
	const [users, setUsers] = useState([
		{ name: "irene ak", email: "irene@gmail.com", gen: "45" },
		{ name: "Augustine ak", email: "aug@gmailcom", gen: "45" },
		{ name: "Barbara", email: "bb@gmailcom", gen: "45" },
	]);
	const addNewUser = (user) => {
		setUsers([...users, user]);
	};

	return (
		<Container>
			<Row style={{ marginTop: "20px" }}>
				<Col md={4}>
					<AddUserForm newUser={addNewUser} />
				</Col>
				<Col md={8}>
					<SeeAllusers userInfo={users} />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
