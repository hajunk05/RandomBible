import {
	BrowserRouter,
	Routes,
	Route,
	Link,
} from 'react-router-dom'

import Home from './pages/Home'
import Favorites from './pages/Favorites'

const App = () => {
	return (
		<BrowserRouter>
			<nav>
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
			</Routes>
		</BrowserRouter>
	)
}

export default App
