import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { ChakraProvider } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
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
				{response.length > 1 ? (
					<div className="trailCard">
						<img className="trailImg" src={response[0].image} alt="" />
						<h2 className="trailTitle">{response[0].trailName}</h2>
						<div className="trailInfo">
							<p className="trailDifficulty">
								Difficulty: <span>{response[0].difficulty}</span>
							</p>
							<p className="trailLength">
								Length: <span>{response[0].length}mi</span>
							</p>
							<p className="trailType">
								Route: <span>{response[0].routeType}</span>
							</p>
							<p className="trailElevation">
								Elevation Gain: <span>{response[0].elevationGain}ft</span>
							</p>
						</div>
						<div></div>
						<article className="trailDescription">
							{response[0].description}
						</article>
						<div className="trailhead">
							<a
								href={`https://www.google.com/maps/place/${response[0].trailheadCoordinates}`}
								target="_blank"
							>
								Trailhead
							</a>
						</div>
					</div>
				) : (
					<div className="spinner">
						<Spinner size="xl" />
					</div>
				)}
			</div>
		</ChakraProvider>
	);
}

export default App;
