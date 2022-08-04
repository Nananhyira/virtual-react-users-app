import React from "react";
import User from "./User";
import { Row, Col } from "react-bootstrap";

function SeeAllusers(props) {
	return (
		<Row>
			<h1>see all the users here</h1>

			{props.userInfo.map((item, index) => {
				return <User key={index} userInfo={item} />;
			})}
		</Row>
	);
}

export default SeeAllusers;
