import React from 'react';

const Banner = () => {
	return (
		<div id="banner" className="flex justify-center items-center flex-col">
			<div className="text-center">
				<h2 className="bg-green-400 py-3 px-6 text-white text-3xl rounded-full bg-opacity-40 mb-2 md:text-6xl">
					CAMP CROUSE
				</h2>
				<h4 className="bg-purple-400 py-3 px-6 text-white text-2xl rounded-full bg-opacity-20 md:text-4xl">
					Camp Crouse offer the best campain deal.
				</h4>
			</div>
		</div>
	);
};

export default Banner;
