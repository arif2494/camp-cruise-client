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
						<li>
							{/* <a href="/">Home</a> */}
							<Link to="/">Home</Link>
						</li>
						<li>
							<label htmlFor="btn-1" className="show">
								Features +
							</label>
							{user.displayName && <a href="/">{user.displayName}</a>}
							<input className="input-field" type="checkbox" id="btn-1" />
							<ul>
								<li>
									<a href="/">Manage All Order</a>
								</li>
								<li>
									<a href="/">Add A New Service</a>
								</li>
							</ul>
						</li>

						{/* sub menu */}
						{/* 	<li>
						<label htmlFor="btn-2" className="show">
							Services +
						</label>
						<a href="/">Services</a>
						<input className="input-field" type="checkbox" id="btn-2" />
						<ul>
							<li>
								<a href="/">Web Design</a>
							</li>
							<li>
								<a href="/">App Design</a>
							</li>
						
							<li>
								<label htmlFor="btn-3" className="show">
									More +
								</label>
								<a href="/">
									More <span className="fa fa-plus" />
								</a>
								<input className="input-field" type="checkbox" id="btn-3" />
								<ul>
									<li>
										<a href="/">Submenu-1</a>
									</li>
									<li>
										<a href="/">Submenu-2</a>
									</li>
									<li>
										<a href="/">Submenu-3</a>
									</li>
								</ul>
							</li>
						</ul>
					</li> */}
						<li>
							<Link to="/myorder">My Orders</Link>
						</li>

						<li>
							{user.photoURL && (
								<img src={user.photoURL} alt="!" className="w-10 rounded-full -mb-3 mr-3" />
							)}
						</li>
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
