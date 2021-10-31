import React from 'react';
import { useState, useEffect } from 'react';
import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';

const ManageAllOrders = () => {
	const [ orders, setOrders ] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/allorders').then((res) => res.json()).then((data) => {
			setOrders(data);
		});
	}, []);
	console.log(orders);
	return (
		<div>
			<div className="container mx-auto">
				<h2 className="text-center text-3xl my-6 font-medium">Manage all orders</h2>
				<div>{orders.map((order) => <ManageSingleOrder key={order._id} order={order} />)}</div>
				<div />
			</div>
		</div>
	);
};

export default ManageAllOrders;
