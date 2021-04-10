import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Dashboard from './pages/Dashboard';

import 'react-toastify/dist/ReactToastify.css';

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Dashboard} />
			</Switch>
			<ToastContainer limit={1} />
		</BrowserRouter>
	);
};

export default Routes;