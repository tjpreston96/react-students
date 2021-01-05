
import React from 'react';
const Scores = (props) => {
	return (
		<div>
			{props.scores.map((score, idx) => (
				<p key={idx}>
					Date: {score.date} | 
					Score: {score.score}
				</p>
			))}
		</div>
	);
};
export default Scores;