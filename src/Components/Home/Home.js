import React from 'react';
import Banner from '../Banner/Banner';
import Camps from '../Camps/Camps';
import HomeAbout from '../HomeAbout/HomeAbout';

const home = () => {
	return (
		<div>
			{/* banner */}
			<Banner />
			{/* home about */}
			<HomeAbout />
			{/* camps */}
			<Camps />
		</div>
	);
};

export default home;
