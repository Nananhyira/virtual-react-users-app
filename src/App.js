import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SeeAllusers from "./components/SeeAllusers";
import AddUserForm from "./components/AddUserForm";

function App() {
	const [users, setUsers] = useState([
		// 	{
		// 		name: "irene ak",
		// 		email: "irene@gmail.com",
		// 		gen: "45",
		// 		id: "8383unduhd38hdd",
		// 	},
		// 	{
		// 		name: "Augustine ak",
		// 		email: "aug@gmailcom",
		// 		gen: "45",
		// 		id: "8787bdbbubc83",
		// 	},
		// 	{ name: "Barbara", email: "bb@gmailcom", gen: "45", id: "8939u83udcc c" },
	]);
	const addNewUser = (user) => {
		user.id = Math.random().toString();
		setUsers([...users, user]);
		console.log(users, user);
	};

	const deleteUser = (id) => {
		setUsers(
			users.filter((user) => {
				if (user.id !== id) {
					return user;
				}
			})
		);
	};
	const EditUser = (id, updatedInfo) => {
		setUsers(
			users.map((user) => {
				if (user.id === id) {
					return updatedInfo;
				}
				return user;
			})
		);
	};

	return (
		<Container>
			<Row style={{ marginTop: "20px" }}>
				<Col md={4}>
					<AddUserForm newUser={addNewUser} />
				</Col>
				<Col md={8}>
					<SeeAllusers
						userInfo={users}
						DeleteUser={deleteUser}
						EditUser={EditUser}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
