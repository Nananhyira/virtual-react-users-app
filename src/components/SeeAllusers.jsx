import React from "react";
import User from "./User";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function SeeAllusers(props) {
	const users = useSelector((state) => {
		return state.usersReducer.users;
	});
	return (
		<Row>
			<h1>see all the users here</h1>

			{users.map((item) => {
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

// const mapStateToProps = (state) => {
// 	return {
// 		users: state.users,
// 	};
// };
// export default connect(mapStateToProps)(SeeAllusers);
export default SeeAllusers;
