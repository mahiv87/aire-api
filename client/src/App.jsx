import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Button, ChakraProvider, Divider, Spinner } from '@chakra-ui/react';
import { MdPlace } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import prettyHtml from 'json-pretty-html';
import aireLogo from './assets/nature_icon.svg';
import './App.css';

function App() {
	const [response, setResponse] = useState('');
	const apiUrl = 'http://localhost:3001/api/trails';
	const sampleResponse = [
		{
			_id: '63af2433d7f128a61ca7186e',
			trailName: 'Emerald Lake Trail',
			description:
				"Enjoy this 3.2-mile out-and-back trail near Estes Park, Colorado. Generally considered an easy route, it takes an average of 1 h 39 min to complete. This is a very popular area for hiking and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.",
			trailheadCoordinates: '40.31195,-105.64567',
			length: 3.2,
			elevationGain: 698,
			routeType: 'Out & Back',
			difficulty: 'Easy',
			image:
				'https://s27363.pcdn.co/wp-content/uploads/2020/09/Nymph-Dream-and-Emerald-Lake-Hike.jpg.optimal.jpg'
		}
	];

	const prettyResponse = prettyHtml(sampleResponse);

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
				<div className="headline">
					<p>aire is a free API for hiking trails.</p>
				</div>
				<div className="usage-container">
					<h1>Usage</h1>
					<p>Retrieve all trails</p>
					<code>GET /api/trails</code>
				</div>
				<Divider />
				<div className="response-container">
					<h1>Sample Response</h1>
					<pre>
						<code>
							<div dangerouslySetInnerHTML={{ __html: prettyResponse }} />
						</code>
					</pre>
				</div>
				<Divider />
				<div className="sample-container">
					<h4 className="sample-title">Sample created with response</h4>
					{response.length > 1 ? (
						<div className="trail-card">
							<img className="trail-img" src={response[0].image} alt="" />
							<h4 className="trail-title">{response[0].trailName}</h4>
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
							<Button
								colorScheme="green"
								variant="ghost"
								rightIcon={<MdPlace />}
							>
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
				<Divider />
				<footer>
					<Button colorScheme="teal" rightIcon={<FaGithub />}>
						<a href="https://github.com/mahiv87/aire-api" target="_blank">
							GitHub
						</a>
					</Button>
				</footer>
			</div>
		</ChakraProvider>
	);
}

export default App;
