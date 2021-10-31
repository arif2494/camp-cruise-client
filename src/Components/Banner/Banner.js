import React from 'react';

const Banner = () => {
	return (
		<div id="banner" className="flex justify-center items-center flex-col">
			<div className="text-center">
				<h2 className="bg-green-400 py-3 px-6 text-white text-3xl rounded-full bg-opacity-60 mb-2">
					CAMP CROUSE{' '}
				</h2>
				<h4 className="bg-pink-400 py-3 px-6 text-white text-2xl rounded-full bg-opacity-60">
					Camp Crouse offer the best campain deal.
				</h4>
			</div>
		</div>
	);
};

export default Banner;
