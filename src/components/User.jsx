import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

function User(props) {
	return (
		<Col md={4} style={{ marginBottom: "1rem" }}>
			<Card>
				<Card.Body>
					<Card.Title>Name {props.userInfo.name} </Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						Email {props.userInfo.email}
					</Card.Subtitle>
					<Card.Text>Gen {props.userInfo.gen}</Card.Text>
					<Button href="#" variant="primary">
						Edit
					</Button>
					<Button href="#" variant="danger">
						Delete
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default User;
