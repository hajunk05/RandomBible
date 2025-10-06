import {
	BrowserRouter,
	Routes,
	Route,
	Link,
} from 'react-router-dom'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { useState } from 'react'
import './App.css'
import VerseDetail from './pages/VerseDetail'

const App = () => {
	return (
		<BrowserRouter>
			<nav id="navigation-bar">
				<Link to="/"> Home </Link>
				<Link to="/favorites"> Favorites </Link>
			</nav>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/favorites"
					element={<Favorites />}
				/>
				<Route
					path="/:book/:chapter/:verse"
					element={<VerseDetail />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
