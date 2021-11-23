import { useEffect } from 'react';

import Home from './components/Home/Home';
import Login from './components/User/Login';
import Register from './components/User/Register';
import ProtectedRoute from './components/Route/ProtectedRoute';
import Profile from './components/User/Profile';
import store from './store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Admin from './components/Admin/Dashboard';
import ProductsList from './components/Admin/ProductsList';
import AddProduct from './components/Admin/AddProduct';
import EditProduct from './components/Admin/EditProduct';

import { loadUser } from './actions/userAction';

import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';
import Orders from './components/Cart/Orders';
import ForgotPassword from './components/User/ForgetPassword';
import ResetPassword from './components/User/ResetPassword';
import UpdatePassword from './components/User/UpdatePassword';
import UpdateProfile from './components/User/UpdateProfile';

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
				<ProtectedRoute exact path='/account' component={Profile} />
				<ProtectedRoute exact path='/cart' component={Cart} />
				<ProtectedRoute exact path='/orders' component={Orders} />
				<ProtectedRoute exact path='/checkout' component={Checkout} />
				<ProtectedRoute exact path='/me/update' component={UpdateProfile} />

				<ProtectedRoute
					exact
					path='/password/update'
					component={UpdatePassword}
				/>

				<Route exact path='/password/forgot' component={ForgotPassword} />
				<Route exact path='/password/reset/:token' component={ResetPassword} />

				<ProtectedRoute
					exact
					isAdmin={true}
					path='/admin/dashboard'
					component={Admin}
				/>
				<ProtectedRoute
					exact
					path='/admin/products'
					isAdmin={true}
					component={ProductsList}
				/>
				<ProtectedRoute
					exact
					path='/admin/product'
					isAdmin={true}
					component={AddProduct}
				/>

				<ProtectedRoute
					exact
					path='/admin/update/:id'
					isAdmin={true}
					component={EditProduct}
				/>
			</Switch>
		</Router>
	);
}

export default App;
