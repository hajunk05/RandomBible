import { useEffect, useState } from 'react'

const Home = () => {
	const [verseData, setVerseData] = useState('')
	const [error, setError] = useState('')
	const [favVerses, setFavVerses] = useState([])

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
			setVerseData(randomVerse)
		} catch (e) {
			setError(e.message)
		}
	}

	const handleRandomVerse = () => {
		randomVerse()
	}

	const handleAddToFavorites = () => {
		setFavVerses(newFav)
	}

	return (
		<div>
			<h1> From: {verseData.name}</h1>
			<h2> {verseData.book} </h2>
			<p>
				{' '}
				{verseData.chapter}:{verseData.verse}{' '}
			</p>
			<p> {verseData.text}</p>
			<button onClick={() => handleRandomVerse()}>
				{' '}
				Another Verse{' '}
			</button>
			<button onClick={() => handleAddToFavorites()}>
				Add to Favorites
			</button>
		</div>
	)
}

export default Home
