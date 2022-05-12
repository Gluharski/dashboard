import { useState, useEffect} from 'react';
import '../../App.css';
import Details from '../details/Details';

function Match({ flag, league, homeTeam, awayTeam, status, date, id }) {
	const [view, setView] = useState(false);
	const URL = `http://api.football-data.org/v2/matches/${id}`;

	function handleClick() {
			fetch(URL, {
				method: 'get',
				headers: {
					'X-Auth-Token': '3a780b3c15f348258961995b7774e006'
				}
			})
			.then(res => res.json())
			.then(database => {
				console.log(database);
			})
			.catch(err => console.log(err));
	};

	return(
		<>
			{flag ? <img src={flag} style={{width: '25px', height: '25px'}} alt="flag" /> : null}

			<article onClick={handleClick} className="match-card">
				<main>
					<div className='playing'>
					{date} - {status} - {homeTeam} - {awayTeam}
					</div>
				</main>
			</article>
		</>
	)
}

export default Match;