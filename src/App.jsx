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
	const [favVerses, setFavVerses] = useState([])
	return (
		<BrowserRouter>
			<nav id="navigation-bar">
				<Link to="/"> Home </Link>
				<Link to="/favorites"> Favorites </Link>
			</nav>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							favVerses={favVerses}
							setFavVerses={setFavVerses}
						/>
					}
				/>
				<Route
					path="/favorites"
					element={
						<Favorites
							favVerses={favVerses}
							setFavVerses={setFavVerses}
						/>
					}
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
