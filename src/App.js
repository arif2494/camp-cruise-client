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
import PageNotFound from './Components/PageNotFound/PageNotFound';

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
					<PrivateRoute path="/myorder">
						<MyOrder />
					</PrivateRoute>
					<PrivateRoute path="/manageorder">
						<ManageAllOrders />
					</PrivateRoute>
					<PrivateRoute path="/addnewcamp">
						<AddNewCamp />
					</PrivateRoute>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="*">
						<PageNotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthProvider>
	);
}

export default App;
