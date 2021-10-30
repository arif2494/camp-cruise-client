import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react/cjs/react.development';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
	const [ user, setUser ] = useState({});

	// google sign in
	const googleProvider = new GoogleAuthProvider();

	const auth = getAuth();

	const signinUsingGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				setUser(user);
				console.log(user);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};

	// current user
	useEffect(
		() => {
			const unsubscribed = onAuthStateChanged(auth, (user) => {
				if (user) {
					setUser(user);
				} else {
					setUser({});
				}
			});
			return () => unsubscribed;
		},
		[ user, auth ]
	);
	// logout
	const logOut = () => {
		signOut(auth).then(() => {
			setUser({});
		});
	};
	return {
		logOut,
		user,
		signinUsingGoogle
	};
};
export default useFirebase;