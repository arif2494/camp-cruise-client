import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
	const { signinUsingGoogle, setUser,logOut,user } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/';
	const handleGoogleSignIn = () => {
		signinUsingGoogle()
			.then((result) => {
				const user = result.user;
				setUser(user);
				history.push(redirect_uri);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	
	};

	return (
		<div>
			<div className="mx-auto container">
				<h2 className="text-center text-3xl font-bold my-6">This is login page</h2>
				<div className="flex justify-center my-36">
					<button onClick={handleGoogleSignIn} className="text-xl font-medium bg-black text-white px-6 py-3">
						Google Login
					</button>
					
				{user.email && 	<button onClick={logOut} className="text-xl font-medium bg-black text-white px-6 py-3 ml-6">
					Signout
					</button>}
					
				</div>
			</div>
		</div>
	);
};

export default Login;
