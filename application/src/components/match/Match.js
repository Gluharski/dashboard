import '../../App.css';

function Match({ flag, league, homeTeam, awayTeam, status, date }) {
	
	// TODO: Think about dinamic class when statuses are diffrent	
	// TODO: calculate current date

	return(
		<article className="match-card">
			<header>
				<div>
					<img src={flag} style={{width: '25px', height: '25px'}} alt="flag" />
				</div>
				<div>
					{league}
				</div>
			</header>

			<main>
				<div className='playing'>
					{homeTeam} - {awayTeam}
				</div>
			</main>
		</article>
	)
}

export default Match;