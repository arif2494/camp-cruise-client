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
		return signInWithPopup(auth, googleProvider);
	};

	// current user
	useEffect(
		() => {
			const unsubscribed = onAuthStateChanged(auth, (user) => {
				if (user) {
					setUser(user);
					console.log(user);
				} else {
					setUser('');
				}
			});
			return () => unsubscribed;
		},
		[ user, auth ]
	);
	// logout
	const logOut = () => {
		signOut(auth).then(() => {
			setUser('');
		});
	};
	return {
		logOut,
		user,
		signinUsingGoogle,
		setUser
	};
};
export default useFirebase;
