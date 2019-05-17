export const add_new_user = (userid, email, pw_hash) => {
	return async dispatch => {
		let bodyObj = {
			userid,
			email,
			pw_hash
		};
		let options = {
			method: 'post',
			body: JSON.stringify(bodyObj),
			headers: {
				'Content-type': 'application/json'
			}
		};
		try {
			fetch(`http://localhost:3897/users/`, options);
		} catch (error) {
			Error('Something went wrong');
		}
	};
};
