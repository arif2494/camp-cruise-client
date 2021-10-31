import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react/cjs/react.development';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
	const [ user, setUser ] = useState({});
	const [ isLoading, setIsLoading ] = useState(true);

	// google sign in
	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();

	const signinUsingGoogle = () => {
		setIsLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// current user
	useEffect(
		() => {
			const unsubscribed = onAuthStateChanged(auth, (user) => {
				if (user) {
					setUser(user);
				} else {
					setUser('');
				}
				setIsLoading(false);
			});
			return () => unsubscribed;
		},
		[ user, auth ]
	);
	// logout
	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser('');
			})
			.finally(() => setIsLoading(false));
	};
	return {
		logOut,
		user,
		signinUsingGoogle,
		setUser,
		setIsLoading,
		isLoading
	};
};
export default useFirebase;
