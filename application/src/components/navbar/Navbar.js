import { useState } from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
	const [login, setLogin] = useState(true);

	return(
		<nav>
			{login
			? <section id="user">
					<Link to="/live-matches">
						live
					</Link>
				</section>
			:
				<section id="guest">
					<Link to="/login">login</Link>
					<Link to="/register">register</Link>
				</section>}
		</nav>
	)
}

export default Navbar;