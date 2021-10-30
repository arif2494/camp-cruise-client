import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
	const { signinUsingGoogle, user } = useAuth();
	const handleGoogleSignIn = () => {
		signinUsingGoogle();
		console.log(user);
	};
	return (
		<div>
			<div className="mx-auto container">
				<h2>This is login page</h2>
				<button onClick={handleGoogleSignIn} className="text-xl font-medium bg-black text-white px-6 py-3">
					Google Login
				</button>
			</div>
		</div>
	);
};

export default Login;
