import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
	const { user, logOut } = useAuth();
	return (
		<div className="bg-nav">
			<div className="container mx-auto">
				<nav>
					<div className="logo">CAMP CRUISE</div>
					<label htmlFor="btn" className="icon" id="bar-icon">
						<span id="bar">
							<FontAwesomeIcon icon={faBars} />
						</span>
					</label>
					<input className="input-field" type="checkbox" id="btn" />
					<ul>

						{user.email ?<>
								<li>
							<Link to="/">Home</Link>
						</li>
							<li>
							<label htmlFor="btn-1" className="show">
								{user.displayName && user.displayName}+
							</label>
							{user.displayName && <a href="/">{user.displayName}</a>}
							<input className="input-field" type="checkbox" id="btn-1" />
							<ul>
								<li>
									<Link to="/manageorder">Manage All Order</Link>
								</li>
								<li>
									<Link to="/addnewcamp">Add A New Camp</Link>
								</li>
							</ul>
						</li>

						<li>
							<Link to="/myorder">My Orders</Link>
						</li>

						<li>
							{user.photoURL && (
								<img src={user.photoURL} alt="!" className="w-10 rounded-full mb-2 md:-mb-3 mr-3" />
							)}
						</li>
						</> : 	<li>
							<Link to="/">Home</Link>
						</li> }
					
					
						{user.email ? (
							<button onClick={logOut} className="py-3 px-6 bg-gray-200">
								Logout
							</button>
						) : (
							<li>
								<Link to="/login">Login</Link>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
