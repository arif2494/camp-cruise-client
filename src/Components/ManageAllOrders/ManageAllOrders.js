import React from 'react';
import { useState, useEffect } from 'react';
import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';

const ManageAllOrders = () => {
	const [ orders, setOrders ] = useState([]);
	useEffect(() => {
		fetch('https://possessed-cemetery-72511.herokuapp.com/allorders').then((res) => res.json()).then((data) => {
			setOrders(data);
		});
	}, []);

	return (
		<div>
			<div className="container mx-auto">
				<h2 className="text-center text-3xl my-6 font-medium">Manage all orders</h2>
				<div className="p-2">{orders.map((order) => <ManageSingleOrder key={order._id} order={order} />)}</div>
				<div />
			</div>
		</div>
	);
};

export default ManageAllOrders;
