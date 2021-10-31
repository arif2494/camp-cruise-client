import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
// import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Order = () => {
	const { user } = useAuth();
	const [ campData, setCampData ] = useState({});
	const [ orderData, setOrderData ] = useState({});
	const { id } = useParams();
	const history = useHistory()
	useEffect(
		() => {
			fetch('http://localhost:5000/camp', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					id: { id }
				})
			})
				.then((res) => res.json())
				.then((data) => {
					setCampData(data)
				});
		},
		[ id ]
	);

	// hook form

	// const { register, handleSubmit } = useForm();
	const handleAddress= e=>{
const address=		e.target.value
const order= {name: user?.displayName,email:user?.email,campName:campData?.name, campPrice:campData?.price, address: address,status:'Pending' }
setOrderData(order)
	}
	const handleSubmit =  (e) => {
e.preventDefault()
		 		fetch('http://localhost:5000/orders',{
		method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body:JSON.stringify(orderData)
}).then(res=> res.json())
.then(data =>{
	if (data){
		alert('order confirm')
		history.push('/')
	}
})

	};

console.log(user, 'from order')
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
						<form className="flex items-center flex-col" onSubmit={handleSubmit}>
							<input
								className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded"
								placeholder="Camp Name"
								defaultValue={campData?.name}

							/>
							<input
								className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded"
								placeholder="Camp Name"
								defaultValue={campData?.price}

							/>
							<input
								className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded"
								defaultValue={user?.displayName}
								placeholder="Name"
								
							/>

							<input
								className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded"
								placeholder="Email"
								defaultValue={user?.email}
							
							/>
							<textarea onBlur={handleAddress} name="address"  className="bg-gray-200 px-3 border-2 my-2 w-full py-3 rounded" rows='8'></textarea>
						

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

			<div />
		</div>
	);
};

export default Order;
