import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

export default function Nav() {
	return (
		<nav>
			<table>
				<section>
					<div className="table-div">
						<span className='relation left'>iq</span>
						<span className='relation right'>notes</span>
					</div>
					<td>html</td>
				</section>
				<section>
					<div className="table-div">
						<Link to="/css/iq" className='relation left'>iq</Link>
						<Link to="/css/notes" className='relation right'>notes</Link>
					</div>
					<td>css</td>
				</section>
				<section>
					<div className="table-div">
						<span className='relation left'>iq</span>
						<span className='relation right'>notes</span>
					</div>
					<td>sass</td>
				</section>
				<section>
					<div className="table-div">
						<span className='relation left'>iq</span>
						<span className='relation right'>notes</span>
					</div>
					<td>javascript</td>
				</section>
				<section>
					<div className="table-div">
						<span className='relation left'>iq</span>
						<span className='relation right'>notes</span>
					</div>
					<td>typescript</td>
				</section>
				<section>
					<div className="table-div">
						<span className='relation left'>iq</span>
						<span className='relation right'>notes</span>
					</div>
					<td>react</td>
				</section>
				<section>
					<div className="table-div">
						<span className='relation left'>iq</span>
						<span className='relation right'>notes</span>
					</div>
					<td>redux</td>
				</section>
				<section>
					<div className="table-div">
						<span className='relation left'>iq</span>
						<span className='relation right'>notes</span>
					</div>
					<td>node.js</td>
				</section>
				<section>
					<div className="table-div">
						<span className='relation left'>iq</span>
						<span className='relation right'>notes</span>
					</div>
					<td>express.js</td>
				</section>
				<section>
					<div className="table-div">
						<span className='relation left'>iq</span>
						<span className='relation right'>notes</span>
					</div>
					<td>java</td>
				</section>
				<section>
					<div className="table-div">
						<span className='relation left'>iq</span>
						<span className='relation right'>notes</span>
					</div>
					<td>mysql</td>
				</section>
				<section>
					<div className="table-div">
						<span className='relation left'>iq</span>
						<span className='relation right'>notes</span>
					</div>
					<td>mongodb</td>
				</section>
				<section>
					<div className="table-div">
						<span className='relation left'>iq</span>
						<span className='relation right'>notes</span>
					</div>
					<td>mongoose</td>
				</section>
				<section>
					<div className="table-div">
						<span className='relation left'>iq</span>
						<span className='relation right'>notes</span>
					</div>
					<td>github</td>
				</section>
				<section>
					<div className="table-div">
						<span className='relation left'>misc</span>
					</div>
					<td>misc</td>
				</section>
			</table>
		</nav>
	)
}
