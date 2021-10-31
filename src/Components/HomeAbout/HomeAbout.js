import React from 'react';
// icons
import icon1 from '../../img/icon/caravan.png';
import icon2 from '../../img/icon/sail-boat.png';
import icon3 from '../../img/icon/tent.png';
import icon4 from '../../img/icon/tree-house.png';
const HomeAbout = () => {
	return (
		<div className="container mx-auto">
			<h1 className="text-8xl font-medium text-opacity-20	text-gray-700 text-center mt-8">ABOUT</h1>
			<div>
				<h3 className="text-5xl text-center font-medium -mt-8">
					Welcome to Wonderer <br /> Camping Ground
				</h3>
				<p className="mt-6 text-xl w-full p-4 md:w-8/12 mx-auto text-center ">
					Camping is an outdoor activity involving overnight stays away from home with or without a shelter,
					such as a tent or a recreational vehicle. Typically participants leave developed areas to spend time
					outdoors in more natural ones in pursuit of activities providing them enjoyment. The night (or more)
					spent outdoors distinguishes camping from day-tripping, picnicking, and other similarly short-term
					recreational activities.
				</p>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 my-8">
				<div className="flex justify-center">
					<img src={icon1} alt="!" />
				</div>
				<div className="flex justify-center">
					<img src={icon2} alt="!" />
				</div>
				<div className="flex justify-center">
					<img src={icon3} alt="!" />
				</div>
				<div className="flex justify-center">
					<img src={icon4} alt="!" />
				</div>
			</div>
		</div>
	);
};

export default HomeAbout;
