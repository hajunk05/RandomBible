import '../css/HomeAndFavorites.css'
import HomeButtons from './AllButtons'
const DisplayVerse = ({
	currentVerseData,
	handleRandomVerse,
	handleAddToFavorites,
	isMaxFav,
	isAlreadyFav,
	isLoading,
	isCompact = false,
	handleDeleteFavorite,
	isDisableButton,
}) => {
	const displayContainer = isCompact
		? 'compact-display-container'
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
				{isDisableButton ? (
					<p>
						{' '}
						{currentVerseData.chapter}:
						{currentVerseData.verse}
					</p>
				) : (
					<a
						href={`${currentVerseData.book.toLowerCase()}/${
							currentVerseData.chapter
						}/${currentVerseData.verse}`}
					>
						{' '}
						{currentVerseData.chapter}:
						{currentVerseData.verse}
					</a>
				)}
				<div id="text">
					<p> {currentVerseData.text}</p>
				</div>
				{!isDisableButton && (
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
				)}
			</div>
		</div>
	)
}

export default DisplayVerse
