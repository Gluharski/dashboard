import { useState, useEffect } from 'react';
import '../../App.css';

function Details(id) {
	const [currentMatch, setCurrentMatch] = useState('');
	const URL = `http://api.football-data.org/v2/matches/${id}`;

	useEffect(() => {
		fetch(URL, {
			method: 'get',
			headers: {
				'X-Auth-Token': '3a780b3c15f348258961995b7774e006'
			}
		})
		.then(res => res.json())
		.then(database => {
			const data = database;
			setCurrentMatch(data);
		})
		.catch(err => console.log(err));
	}, []);

	return(
		<section className="match-details">
			Deatils component
			{/* {console.log(currentMatch)} */}
		</section>
	)
}

export default Details;