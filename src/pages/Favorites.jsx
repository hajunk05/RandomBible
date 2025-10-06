import { useEffect, useState } from 'react'
import './css/HomeAndFavorites.css'
import DisplayVerse from './components/DisplayVerse'
import './css/HomeAndFavorites.css'
import { useLocation } from 'react-router-dom'

const Favorites = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [favVerses, setFavVerses] = useState([])
	const location = useLocation()

	const handleDeleteFavorite = (id) => {
		localStorage.removeItem(id)
		const favVersesToAdd = []
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i)
			if (!Number.isNaN(Number(key))) {
				favVersesToAdd.push(
					JSON.parse(localStorage.getItem(key))
				)
			}
		}
		setFavVerses(favVersesToAdd)
		localStorage.setItem(
			'count',
			Number(localStorage.getItem('count')) - 1
		)
	}

	useEffect(() => {
		const favVersesToAdd = []
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i)
			if (!Number.isNaN(Number(key))) {
				favVersesToAdd.push(
					JSON.parse(localStorage.getItem(key))
				)
			}
		}
		setFavVerses(favVersesToAdd)
		setIsLoading(false)
	}, [location.key])

	if (Number(localStorage.getItem('count')) < 1) {
		return (
			<div id="empty-favorites-container">
				<p> It's quiet here...</p>
			</div>
		)
	}

	if (isLoading) {
		return (
			<div className="display-container">
				<div className="display-text-only">
					<h1 id="loading-container"> Loading... </h1>
				</div>
			</div>
		)
	}

	return (
		<div id="parent-favorites-container">
			{favVerses.map((verseData) => {
				return (
					<div
						key={verseData.id}
						id="compact-favorites-container"
					>
						<DisplayVerse
							currentVerseData={verseData}
							handleAddToFavorites={null}
							isMaxFav={null}
							isAlreadyFav={null}
							isLoading={null}
							isCompact={true}
							handleDeleteFavorite={handleDeleteFavorite}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default Favorites
