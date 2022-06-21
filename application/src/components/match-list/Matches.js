import { useState, useEffect } from 'react';

import Match from '../match/Match';

function Matches() {
	const [matches, setMatches] = useState([]);
	const url = 'https://api.football-data.org/v2/matches';
	
	let allMatches = {};

	useEffect(() => {
		fetch(url, {
			method: 'get',
			headers: {
				'X-Auth-Token': '3a780b3c15f348258961995b7774e006'
			}
		})
		.then(response => response.json())
		.then(database => {
			const data = database.matches;
			console.log(data);

			data.forEach(element => {
				if(!allMatches[element.competition.name]) {
					allMatches[element.competition.name] = [];
				}	

				allMatches[element.competition.name].push({
					id: element.id,
					flag: element.competition.area.ensignUrl,
					home: element.homeTeam.name,
					away: element.awayTeam.name,
					status: element.status,
					date: element.date
				})
			})
			setMatches(allMatches);
		})
		.catch(err => console.log(err));
	}, []);

	return(
		<section>
			<section className='section-title'>
				<h3>Today matches count: {matches.length}</h3>
				{console.log(Object.values(matches).length)}
			</section>

			{Object.entries(matches).map(([league, matches]) => {
				const countries = [];

				return matches.map(x => {
					const condition = countries.includes(x.flag);

					if(!condition) {
						countries.push(x.flag)
					}
				 	
					return <Match
						flag={condition ? '' : x.flag}
						id={x.id}
						homeTeam={x.home}
						awayTeam={x.away}
						status={x.status}
						date={x.date}
					/>
				})}
			)}
		</section>
	)
}

export default Matches;