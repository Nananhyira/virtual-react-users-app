import React from "react";
import User from "./User";
import { Row, Col } from "react-bootstrap";

function SeeAllusers(props) {
	return (
		<Row>
			<h1>see all the users here</h1>

			{props.userInfo.map((item) => {
				return (
					<User
						key={item.id}
						userInfo={item}
						DeleteUser={props.DeleteUser}
						EditUser={props.EditUser}
					/>
				);
			})}
		</Row>
	);
}

export default SeeAllusers;
