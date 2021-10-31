import React, { useRef } from 'react';
import { useHistory } from 'react-router';

const AddNewCamp = () => {
	const history = useHistory();
	const nameRef = useRef('');
	const imgRef = useRef('');
	const priceRef = useRef('');
	const personRef = useRef('');
	const descRef = useRef('');
	const handleSubmit = (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const img = imgRef.current.value;
		const price = priceRef.current.value;
		const person = personRef.current.value;
		const desc = descRef.current.value;
		const campData = {
			name: name,
			img: img,
			desc: desc,
			price: price,
			person: person
		};
		fetch('https://possessed-cemetery-72511.herokuapp.com/newcamp', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(campData)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					alert('New Camp Added');
					history.push('/');
					e.target.reset();
				}
			});
	};
	return (
		<div>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 p-2">
					<div>
						<img src="https://i.ibb.co/jf619TG/New-Project-1.jpg" alt="" />
					</div>
					<div>
						<h2 className="text-2xl text-center font-medium">Add a New Camp</h2>
						{/* camp form */}
						<form className="flex items-center flex-col" onSubmit={handleSubmit}>
							<input
								required
								className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded"
								placeholder="Camp Name"
								ref={nameRef}
							/>
							<input
								required
								className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded"
								placeholder="Img Link"
								ref={imgRef}
							/>
							<small className="text-left">
								Give Image of <span className="text-blue-600">300x200</span> or use this link :
								<span className="text-green-600">
									https://source.unsplash.com/random/300x200?camping
								</span>
							</small>
							<input
								required
								className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded"
								placeholder="Set Price"
								ref={priceRef}
							/>

							<input
								required
								className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded"
								placeholder="Set Maximum Person Capacity"
								ref={personRef}
							/>
							<textarea
								ref={descRef}
								required
								name="description"
								className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded"
								placeholder="Description"
								rows="8"
							/>
							<button
								className=" my-2 text-lg font-bold px-6 py-3 bg-black text-white cursor-pointer"
								type="submit"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddNewCamp;
