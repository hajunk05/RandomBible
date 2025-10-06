import { useEffect, useState } from 'react'
import DisplayVerse from './components/DisplayVerse'
import Popup from './components/Popup'

const Home = () => {
	const [currentVerseData, setCurrentVerseData] =
		useState('')
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [isMaxFav, setIsMaxFav] = useState(false)
	const [isAlreadyFav, setIsAlreadyFav] = useState(false)

	useEffect(() => {
		randomVerse()
	}, [])

	const randomVerse = async () => {
		try {
			const response = await fetch(
				'https://bible-api.com/data/web/random'
			)

			if (!response.ok) {
				throw new Error('Failed to fetch detailed verse')
			}

			const fullVerseData = await response.json()

			const { book, book_id, chapter, text, verse } =
				fullVerseData.random_verse

			const randomVerse = {
				book,
				book_id,
				chapter,
				text,
				verse,
			}
			setCurrentVerseData(randomVerse)
			setTimeout(() => setIsLoading(false), 1000)
		} catch (e) {
			setIsLoading(false)
			setError(e.message)
		}
	}

	const handleRandomVerse = () => {
		setIsLoading(true)
		randomVerse()
		setIsAlreadyFav(false)
	}

	const handleAddToFavorites = () => {
		let currentIds = []
		let favVerse = {}
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i)
			if (!Number.isNaN(Number(key))) {
				currentIds.push(
					JSON.parse(localStorage.getItem(key)).id
				)
			}
		}

		if (localStorage.getItem('1') !== null) {
			const newId = Math.max(...currentIds)

			favVerse = {
				...currentVerseData,
				id: newId + 1,
			}
		} else {
			favVerse = {
				...currentVerseData,
				id: 1,
			}
		}

		localStorage.setItem(
			favVerse.id,
			JSON.stringify(favVerse)
		)

		if (localStorage.getItem('count') == null) {
			localStorage.setItem('count', 0)
		}
		localStorage.setItem(
			'count',
			Number(localStorage.getItem('count')) + 1
		)
		if (Number(localStorage.getItem('count')) >= 10) {
			setIsMaxFav(true)
		}
		setIsAlreadyFav(true)
	}

	if (error) {
		return <> {error}</>
	}

	return (
		<>
			<DisplayVerse
				currentVerseData={currentVerseData}
				handleRandomVerse={handleRandomVerse}
				handleAddToFavorites={handleAddToFavorites}
				isMaxFav={isMaxFav}
				isAlreadyFav={isAlreadyFav}
				isLoading={isLoading}
				handleDeleteFavorite={null}
			/>
			<Popup isAlreadyFav={isAlreadyFav} />
		</>
	)
}

export default Home
