import React, { useState } from "react";
import { Modal, Col, Card, Button } from "react-bootstrap";
import EditUserForm from "./EditUserForm";

function User(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleDelete = (e) => {
		e.preventDefault();
		props.DeleteUser(props.userInfo.id);
	};
	return (
		<>
			<Modal show={show} onHide={handleClose} animation={true}>
				<Modal.Header closeButton>
					<Modal.Title>Edit User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<EditUserForm
						userInfo={props.userInfo}
						EditUser={props.EditUser}
						hide={handleClose}
					/>
				</Modal.Body>
			</Modal>
			<Col md={4} style={{ marginBottom: "1rem" }}>
				<Card>
					<Card.Body>
						<Card.Title>Name {props.userInfo.name} </Card.Title>
						<Card.Subtitle className="mb-2 text-muted">
							Email {props.userInfo.email}
						</Card.Subtitle>
						<Card.Text>Gen {props.userInfo.gen}</Card.Text>
						<Button href="#" variant="primary" onClick={handleShow}>
							Edit
						</Button>
						<Button href="#" variant="danger" onClick={handleDelete}>
							Delete
						</Button>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}

export default User;
