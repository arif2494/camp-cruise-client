import React from 'react';

const ManageSingleOrder = (props) => {
	const { name, email, campPrice, status, address, _id } = props.order;
	// cancel order
	const cancelOrder = (id) => {
		const url = `http://localhost:5000/cancel/${id}`;
		fetch(url, {
			method: 'DELETE'
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					alert('Item deleted');
					window.location.reload();
				}
			});
	};
	// approve order
	const approveOrder = (id) => {
		const url = `http://localhost:5000/status/${id}`;
		fetch(url, {
			method: 'PUT'
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					alert('Item Approved');
					window.location.reload();
				}
			});
	};
	return (
		<div className="grid grid-cols-7 border-2 py-3 px-6 mb-2 rounded-2xl">
			<p>Name: {name}</p>
			<p className="col-span-2">Email: {email}</p>
			<p>Price: {campPrice}</p>
			<p>Status: {status}</p>
			<p>Address: {address}</p>
			<div>
				<button onClick={() => approveOrder(_id)} className="bg-green-700 text-gray-200 mr-2 py-2 px-4">
					Approve
				</button>
				<button onClick={() => cancelOrder(_id)} className="bg-red-700 text-gray-200 py-2 px-4">
					Cancel
				</button>
			</div>
		</div>
	);
};

export default ManageSingleOrder;
