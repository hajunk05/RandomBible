import { useEffect, useState } from 'react'
import DisplayVerse from './components/DisplayVerse'

const Home = ({ favVerses, setFavVerses }) => {
	const [currentVerseData, setCurrentVerseData] =
		useState('')
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

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
		setFavVerses(favVerses.concat(currentVerseData))
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
		/>
	)
}

export default Home
