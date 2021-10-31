import React from 'react';
import Banner from '../Banner/Banner';
import Camps from '../Camps/Camps';
import HomeAbout from '../HomeAbout/HomeAbout';
import ShowCase from '../ShowCase/ShowCase';

const home = () => {
	return (
		<div>
			{/* banner */}
			<Banner />
			{/* home about */}
			<HomeAbout />
			{/* camps */}
			<Camps />
			<ShowCase />
		</div>
	);
};

export default home;
