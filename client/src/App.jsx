import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import aireLogo from './assets/nature_icon.svg';
import './App.css';

function App() {
	const [response, setResponse] = useState('');
	const apiUrl = 'http://localhost:3001/api/trails';

	const getTrails = useCallback(async () => {
		await axios
			.get(apiUrl)
			.then((res) => res.data)
			.then((data) => setResponse(data))
			.catch((err) => console.error(err));
	}, [apiUrl]);

	useEffect(() => {
		getTrails();
	}, [getTrails]);

	console.log(response[0]);

	return (
		<div className="App">
			<img className="logo" src={aireLogo} alt="" />
			<h1 className="title">aire</h1>
			<div>
				<h2>{response[0].trailName}</h2>
			</div>
		</div>
	);
}

export default App;
