import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

var mysql = require('mysql');
const options = {
	user: 'root',
	password: 'password',
	database: 'mydb'
};
const connection = mysql.createConnection(options);

const App = () => {
	const [todo, settodo] = useState([]);
	const [dummyState, setDummyState] = useState('initialState');

	useEffect(() => {
		const fetchData = async () => {
			let data = await fetch('https://jsonplaceholder.typicode.com/todos/2');
			data = await data.json();
			settodo([...todo, data]);
		};
		fetchData();
		connection.query('SELECT * FROM user', (error, todos, fields) => {
			if (error) {
				console.error('An error occurred while executing the query');
				throw error;
			}
			console.log(todos);
		});
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>{dummyState}</p>
				{todo.map(x => {
					return <p>{x.title}</p>;
				})}
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
