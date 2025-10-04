import '../css/Home.css'
const DisplayVerse = ({
	currentVerseData,
	handleRandomVerse,
	handleAddToFavorites,
	isMaxFav,
	isAlreadyFav,
	isLoading,
}) => {
	if (isLoading) {
		return (
			<div className="display-container">
				<h1> From: World English Bible</h1>
				<div className="display-text-only">
					<h1 id="loading-container"> Loading... </h1>
				</div>
			</div>
		)
	}
	return (
		<div className="display-container">
			<h1> From: World English Bible</h1>
			<div className="display-text-only">
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
					<button onClick={() => handleRandomVerse()}>
						{' '}
						Another Verse{' '}
					</button>
					{isMaxFav || isAlreadyFav ? (
						<button
							disabled
							id="favorite-button-pressed"
						>
							{' '}
							Add to Favorites{' '}
						</button>
					) : (
						<button onClick={() => handleAddToFavorites()}>
							Add to Favorites
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default DisplayVerse
