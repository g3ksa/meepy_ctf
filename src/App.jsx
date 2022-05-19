import React from 'react';
import {Routes, Route, Link } from 'react-router-dom'; 

import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Flag } from './components/Flag';
import { NotAdmin } from './components/NotAdmin';
import { Admin } from './components/Admin';
import { Login } from './components/Login';
import { AnimatePresence } from 'framer-motion';

const AdminYes = () => {
	return (
		<>
			<Admin/>
			<Link to="/login" className="btn">Login</Link>
		</>
	);
}

const isAdmin = () => {
	return navigator.userAgent == 'admin' ? <AdminYes/> : <NotAdmin/>;
}

const App = () => {
	return(
		<>
			<AnimatePresence exitBeforeEnter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={navigator.userAgent == 'admin' ? <AdminYes /> : <Login />} />
						<Route path="login" element={<Login />} />
					</Route>
				</Routes>
			</AnimatePresence>
		</>
	)
}

export default App
