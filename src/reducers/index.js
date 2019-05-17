export default (state = [], {type, payload}) => {
	switch (type) {
		case 'ADD_USER_TO_DB':
			return {...state, ...payload};
		default:
			return state;
	}
};
