import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DisplayVerse from './components/DisplayVerse'

const VerseDetail = () => {
	const [verseData, setVerseData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)
	let { book, chapter, verse } = useParams()
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://bible-api.com/${book}+${chapter}:${verse}`
				)

				if (!response.ok) {
					throw new Error('Failed to fetch specific verse')
				}

				const verseMetaData = await response.json()

				const { verses } = verseMetaData

				const verseDataToAdd = {
					book: verses[0].book_name,
					chapter: verses[0].chapter,
					verse: verses[0].verse,
					text: verses[0].text,
				}
				console.log(verseDataToAdd)
				setVerseData(verseDataToAdd)
				setIsLoading(false)
			} catch (e) {
				setIsLoading(false)
				setError(e.message)
			}
		}
		fetchData()
	}, [])

	if (error) {
		return <> {error}</>
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
		<DisplayVerse
			currentVerseData={verseData}
			handleAddToFavorites={null}
			isMaxFav={null}
			isAlreadyFav={null}
			isLoading={false}
			handleDeleteFavorite={null}
			isDisableButton={true}
		/>
	)
}

export default VerseDetail
