import '../css/HomeAndFavorites.css'
import HomeButtons from './HomeButtons'
const DisplayVerse = ({
	currentVerseData,
	handleRandomVerse,
	handleAddToFavorites,
	isMaxFav,
	isAlreadyFav,
	isLoading,
	isCompact = false,
	handleDeleteFavorite,
}) => {
	const displayContainer = isCompact
		? null
		: 'display-container'

	const displayText = isCompact
		? 'compact-display-text-only'
		: 'display-text-only'

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
		<div className={displayContainer}>
			<div className={displayText}>
				<h1> {currentVerseData.book} </h1>
				<p>
					{' '}
					{currentVerseData.chapter}:
					{currentVerseData.verse}{' '}
				</p>
				<div id="text">
					<p> {currentVerseData.text}</p>
				</div>
				<div className="display-buttons-only">
					<HomeButtons
						handleRandomVerse={handleRandomVerse}
						isMaxFav={isMaxFav}
						isAlreadyFav={isAlreadyFav}
						handleAddToFavorites={handleAddToFavorites}
						handleDeleteFavorite={handleDeleteFavorite}
						currentVerseData={currentVerseData}
					/>
				</div>
			</div>
		</div>
	)
}

export default DisplayVerse
