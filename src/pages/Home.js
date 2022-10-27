import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SeeAllusers from "../components/SeeAllusers";
import AddUserForm from "../components/AddUserForm";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/Config";

function Home() {
	const SignOut = async (e) => {
		e.preventDefault();
		try {
			signOut(auth);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div>
			<Container>
				<Row style={{ marginTop: "20px" }}>
					<Col md={4}>
						<AddUserForm
						// newUser={addNewUser}
						/>
					</Col>
					<Col md={8}>
						<SeeAllusers
						// userInfo={users}
						// DeleteUser={deleteUser}
						// EditUser={EditUser}
						/>
					</Col>
					<Button onClick={SignOut} variant="danger">
						Logout
					</Button>
				</Row>
			</Container>
		</div>
	);
}

export default Home;
