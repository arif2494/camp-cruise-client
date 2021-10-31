import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';
import MySingleOrder from '../MySingleOrder/MySingleOrder';

const MyOrder = () => {
	const { user } = useAuth();
	const [ orders, setOrders ] = useState([]);
	const userEmail = user.email;
	useEffect(
		() => {
			fetch('https://possessed-cemetery-72511.herokuapp.com/myorder', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					userEmail
				})
			})
				.then((res) => res.json())
				.then((data) => {
					setOrders(data);
				});
		},
		[ userEmail ]
	);
	return (
		<div>
			<div className="container mx-auto">
				<h2 className="text-center text-3xl my-6 font-medium">Showing your all orders</h2>
				<div className="p-2">{orders.map((order) => <MySingleOrder key={order._id} order={order} />)}</div>
				<div />
			</div>
		</div>
	);
};

export default MyOrder;
