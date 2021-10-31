import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Order from './Components/Order/Order';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyOrder from './Components/MyOrder/MyOrder';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import AddNewCamp from './Components/AddNewCamp/AddNewCamp';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<PrivateRoute path="/order/:id">
						<Order />
					</PrivateRoute>
					<Route path="/myorder">
						<MyOrder />
					</Route>
					<Route path="/manageorder">
						<ManageAllOrders />
					</Route>
					<Route path="/addnewcamp">
						<AddNewCamp />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthProvider>
	);
}

export default App;
