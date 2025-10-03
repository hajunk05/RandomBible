import '../css/Home.css'
const DisplayVerse = ({
	currentVerseData,
	handleRandomVerse,
	handleAddToFavorites,
	isMaxFav,
	isAlreadyFav,
}) => {
	return (
		<div className="display-container">
			<h1> From: {currentVerseData.name}</h1>
			<div className="display-text-only">
				<h2> {currentVerseData.book} </h2>
				<p>
					{' '}
					{currentVerseData.chapter}:
					{currentVerseData.verse}{' '}
				</p>
				<p> {currentVerseData.text}</p>
			</div>
			<div className="display-buttons-only">
				<button onClick={() => handleRandomVerse()}>
					{' '}
					Another Verse{' '}
				</button>
				{isMaxFav || isAlreadyFav ? (
					<button disabled> Add to Favorites </button>
				) : (
					<button onClick={() => handleAddToFavorites()}>
						Add to Favorites
					</button>
				)}
			</div>
		</div>
	)
}

export default DisplayVerse
