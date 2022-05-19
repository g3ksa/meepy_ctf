import React from 'react';
import {Routes, Route, Link } from 'react-router-dom'; 

import { Header } from './components/Header';
import { MainBlock } from './pages/mainpage/MainBlock';
import { Sources } from './pages/sources/Sources';
import { Stats } from './pages/stats/Stats';
import { Team } from './pages/team/Team';
import { Layout } from './components/Layout';
import { Tasks } from './pages/tasks/Tasks';
import { Flag } from './components/Flag';
import { AnimatePresence } from 'framer-motion';

const App = () => {
	return(
		<>
			<AnimatePresence exitBeforeEnter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<MainBlock />} />
						<Route path="sources" element={<Sources />} />
						<Route path="stats" element={<Stats />} />
						<Route path="team" element={<Team />} />
						<Route path="tasks" element={<Tasks />} />
					</Route>
				</Routes>
			</AnimatePresence>
		</>
	)
}

export default App
