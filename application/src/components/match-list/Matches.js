import { useState, useEffect } from 'react';

import Match from '../match/Match';

function Matches() {
	const url = 'https://api.football-data.org/v2/matches';
	// const [matches, setMatches] = useState([
	// 	{id: 1, teams: 'Spartak - Levksi', result: '1-0'},
	// 	{id: 2, teams: 'Botev - Lokomotiv', result: '3-3'},
	// 	{id: 3, teams: 'Maritsa - Etar', result: '2-1'}
	// ]);

	const [matches, setMatches] = useState([]);

	useEffect(() => {
		fetch(url, {
			method: 'get',
			headers: {
				'X-Auth-Token': '3a780b3c15f348258961995b7774e006'
			}
		})
		.then(response => response.json())
		.then(data => {
			setMatches(data.matches)
		})
		.catch(err => console.log(err));
	}, []);
	
	console.log(matches)

	return(
		<section>
			<section className='section-title'>
				<h3>Today matches count: {matches.length} </h3>
			</section>

				{matches.map(x => 
					 <Match 
						flag={x.competition.area.ensignUrl}
						status={x.status} 
						league={x.competition.name} 
						homeTeam={x.homeTeam.name} 
						awayTeam={x.awayTeam.name}
						date={x.utcDate}
					/> )}
				
		</section>
	)
}

export default Matches;