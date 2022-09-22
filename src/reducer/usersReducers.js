import { v4 as uuid } from "uuid";
let initialState = {
	users: [
		{
			name: "irene ak",
			email: "irene@gmail.com",
			gen: "45",
			id: uuid(),
		},
		{
			name: "Augustine ak",
			email: "aug@gmailcom",
			gen: "45",
			id: uuid(),
		},
		{
			name: "new user",
			email: "aug@gmailcom",
			gen: "45",
			id: uuid(),
		},
		{
			name: "beatrice",
			email: "beautrice@gmailcom",
			gen: "45",
			id: uuid(),
		},
	],
};

let usersReducer = (state = initialState, action) => {
	// WRITE IF ELSE LOGIC TO HANDLE action
	// if (action.type === "ADD_NEW_USER") {
	// 	return { ...state, users: [...state.users, action.payload] };
	// }
	switch (action.type) {
		case "ADD_NEW_USER":
			return { ...state, users: [...state.users, action.payload] };

		case "DELETE_USER":
			const unDeletedUsers = state.users.filter(
				(user) => user.id !== action.payload
			);
			return { ...state, users: unDeletedUsers };

		case "EDIT_USER":
			const updatedUserInfo = state.users.map((user) => {
				if (user.id === action.payload.updatedInfo.id) {
					return action.payload.updatedInfo;
				} 
				else {return user}
			});
			return { ...state, users: updatedUserInfo };

		default:
			return state;
	}
};

export default usersReducer;
