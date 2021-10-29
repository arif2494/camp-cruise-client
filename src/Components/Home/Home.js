import React from 'react';
import Banner from '../Banner/Banner';
import Camps from '../Camps/Camps';
import Header from '../Header/Header';
import HomeAbout from '../HomeAbout/HomeAbout';

const home = () => {
	return (
		<div>
			<Header />
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
