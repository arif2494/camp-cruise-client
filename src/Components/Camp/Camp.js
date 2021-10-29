import React from 'react';

const Camp = (props) => {
	const { name } = props.camp;
	console.log(name);
	return (
		<div>
			<h1>camp</h1>
		</div>
	);
};

export default Camp;
