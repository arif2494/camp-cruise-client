import React from 'react';
import Banner from '../Banner/Banner';
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
		</div>
	);
};

export default home;
