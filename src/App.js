import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {add_new_user} from './thunks/add_new_user';

import logo from './logo.svg';
import './App.css';

const App = ({add_new_user}) => {
	const [users, setusers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			let data = await fetch('http://localhost:3000/users/');
			data = await data.json();
			console.log('fetched data', data);
			setusers([users, ...data]);
			console.log(users);
		};
		fetchData();
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				{users.map((x, i) => {
					return <p key={i}>{x.email}</p>;
				})}
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
				<button
					onClick={() => add_new_user('testconnect3', 'testconnect500@gmail.com', 'testpwhash43')}
				/>
			</header>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	add_new_user: (userid, email, pw_hash) => dispatch(add_new_user(userid, email, pw_hash))
});

export default connect(
	null,
	mapDispatchToProps
)(App);
