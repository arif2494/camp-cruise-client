import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';

const Order = () => {
	const [ campData, setCampData ] = useState({});
	const [ orderData, setOrderData ] = useState({});
	const { id } = useParams();
	useEffect(
		() => {
			fetch('http://localhost:5000/order', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					id: { id }
				})
			})
				.then((res) => res.json())
				.then((data) => setCampData(data));
		},
		[ id ]
	);

	// hook form

	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		setOrderData(data);
	};
	// handle order
	const handleOrder = (id) => {
		orderData.id = id;
		console.log(orderData);
	};

	return (
		<div>
			<div className="container mx-auto">
				<h1>Details of the Camp</h1>
				<div className="grid grid-cols-2 gap-4">
					{/* camp details */}
					<div>
						<div>
							<img className="w-full" src={campData.img} alt="!" />
						</div>
						<div>
							<h1 className=" my-2 text-4xl font-medium">{campData.name}</h1>
							<p className=" my-2 text-lg">{campData.desc}</p>
							<p className=" my-2 text-lg font-bold">Person : {campData.person} </p>
							<p className=" my-2 text-lg font-bold">Price : {campData.price}</p>
							<button className=" my-2 text-lg font-bold px-6 py-3 bg-black text-white">
								Confirm Order
							</button>
						</div>
					</div>
					{/* form for order */}
					<div>
						Please fill up the form to confirm order
						{/* form */}
						<form className="flex items-center flex-col" onSubmit={handleSubmit(onSubmit)}>
							<input
								className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded"
								placeholder="Name"
								{...register('name', { required: true })}
							/>

							<input
								className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded"
								placeholder="Email"
								{...register('email', { required: true })}
							/>
							<input
								className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded"
								placeholder="Area"
								{...register('area', { required: true })}
							/>
							<input
								className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded"
								placeholder="City"
								{...register('city', { required: true })}
							/>
							<input
								className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded"
								placeholder="Country"
								{...register('country', { required: true })}
							/>

							<button
								className=" my-2 text-lg font-bold px-6 py-3 bg-black text-white cursor-pointer"
								type="submit"
								onClick={() => handleOrder(campData._id)}
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>

			<div />
		</div>
	);
};

export default Order;
