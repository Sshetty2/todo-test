import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
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
			</header>
		</div>
	);
};

export default App;
