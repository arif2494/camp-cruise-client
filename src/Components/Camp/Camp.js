import React from 'react';
import { Link } from 'react-router-dom';

const Camp = (props) => {
	const { name, desc, img, _id } = props.camp;

	const url = `/order/${_id}`;

	return (
		<div>
			<img className="w-full px-8 py-4" src={img} alt="!" />
			<div className="px-8 mb-6">
				<h1 className="text-3xl font-medium">{name}</h1>
				<p className="text-lg py-2">{desc.substring(0, 100)}...</p>
				<Link to={url}>
					<button className="text-xl font-medium bg-black text-white px-6 py-3">Book Now</button>
				</Link>
			</div>
		</div>
	);
};

export default Camp;
