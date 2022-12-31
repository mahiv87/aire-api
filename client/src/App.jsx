import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Button, ChakraProvider, Spinner } from '@chakra-ui/react';
// import { Spinner } from '@chakra-ui/react';
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

	return (
		<ChakraProvider>
			<div className="App">
				<header>
					<img className="logo" src={aireLogo} alt="" />
					<h1 className="title">aire</h1>
				</header>
				<div></div>
				<div className="sample-container">
					<h1 className="sample-title">Sample created with response</h1>
					{response.length > 1 ? (
						<div className="trail-card">
							<img className="trail-img" src={response[0].image} alt="" />
							<h2 className="trail-title">{response[0].trailName}</h2>
							<div className="trail-info">
								<p className="trail-difficulty">
									Difficulty: <span>{response[0].difficulty}</span>
								</p>
								<p className="trail-length">
									Length: <span>{response[0].length}mi</span>
								</p>
								<p className="trail-type">
									Route: <span>{response[0].routeType}</span>
								</p>
								<p className="trail-elevation">
									Elevation Gain: <span>{response[0].elevationGain}ft</span>
								</p>
							</div>
							<div></div>
							<article className="trail-description">
								{response[0].description}
							</article>
							<Button colorScheme="green" variant="ghost">
								<a
									href={`https://www.google.com/maps/place/${response[0].trailheadCoordinates}`}
									target="_blank"
								>
									Trailhead
								</a>
							</Button>
						</div>
					) : (
						<div className="spinner">
							<Spinner size="xl" />
						</div>
					)}
				</div>
			</div>
		</ChakraProvider>
	);
}

export default App;
