import { useEffect, useState } from 'react'
import DisplayVerse from './components/DisplayVerse'

const Home = ({ favVerses, setFavVerses }) => {
	const [currentVerseData, setCurrentVerseData] =
		useState('')
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [isMaxFav, setIsMaxFav] = useState(false)

	useEffect(() => {
		randomVerse()
	}, [])

	const randomVerse = async () => {
		try {
			const response = await fetch(
				'https://bible-api.com/data/web/random'
			)

			if (!response.ok) {
				throw new Error('Failed to fetch verse')
			}

			const fullVerseData = await response.json()

			const { name } = fullVerseData.translation
			const { book, book_id, chapter, text, verse } =
				fullVerseData.random_verse

			const randomVerse = {
				name,
				book,
				book_id,
				chapter,
				text,
				verse,
			}
			setCurrentVerseData(randomVerse)
			setTimeout(() => setIsLoading(false), 1000)
		} catch (e) {
			setError(e.message)
		}
	}

	const handleRandomVerse = () => {
		randomVerse()
	}

	const handleAddToFavorites = () => {
		const newId = Math.max(
			...favVerses.map((verse) => verse.id)
		)
		const favVerse =
			newId === -Infinity
				? {
						...currentVerseData,
						id: 1,
				  }
				: {
						...currentVerseData,
						id: newId + 1,
				  }

		setFavVerses(favVerses.concat(favVerse))
		if (favVerses.length + 1 >= 10) {
			setIsMaxFav(true)
		}
	}

	if (isLoading) {
		return <>Loading...</>
	}

	if (error) {
		return <> {error}</>
	}

	return (
		<DisplayVerse
			currentVerseData={currentVerseData}
			handleRandomVerse={handleRandomVerse}
			handleAddToFavorites={handleAddToFavorites}
			isMaxFav={isMaxFav}
		/>
	)
}

export default Home
