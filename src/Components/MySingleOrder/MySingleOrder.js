import React from 'react';

const MySingleOrder = (props) => {
	const { name, email, campPrice, status, address, _id } = props.order;
	const cancelOrder = (id) => {
		const url = `https://possessed-cemetery-72511.herokuapp.com/cancel/${id}`;
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
	return (
		<div className="grid grid-cols-1 md:grid-cols-7 border-2 py-3 px-6 mb-2 rounded-2xl">
			<p>Name: {name}</p>
			<p className="col-span-2">Email: {email}</p>
			<p>Price: {campPrice}</p>
			<p>Status: {status}</p>
			<p>Address: {address}</p>
			<button onClick={() => cancelOrder(_id)} className="bg-red-700 text-gray-200">
				Cancel
			</button>
		</div>
	);
};

export default MySingleOrder;
