import React, { useEffect, useState } from 'react';
import Camp from '../Camp/Camp';

const Camps = () => {
	const [ camps, setCamps ] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/camps').then((res) => res.json()).then((data) => setCamps(data));
	}, []);
	return (
		<div className="bg-gray-200 my-6">
			<div className="container mx-auto">
				{/* header */}
				<div className="grid grid-cols-2">
					<div>
						<h1 className="text-8xl font-medium text-opacity-30	text-gray-700 text-center mt-8">
							CAMPSITES
						</h1>
						<div>
							<h5 className="text-5xl text-right font-medium -mt-8">
								Book your dream <br /> vacation now
							</h5>
						</div>
					</div>
					<div className="flex items-center">
						<p className="mt-6 text-xl w-8/12 mx-auto text-right">
							Typically participants leave developed areas to spend time outdoors in more natural ones in
							pursuit of activities providing them enjoyment. The night (or more) spent outdoors
							distinguishes camping
						</p>
					</div>
				</div>
				{/* all camps */}
				<div>{camps.map((camp) => <Camp key={camp.id} camp={camp} />)}</div>
			</div>
		</div>
	);
};

export default Camps;
