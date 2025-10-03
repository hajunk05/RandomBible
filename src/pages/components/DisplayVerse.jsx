import '../css/Home.css'
const DisplayVerse = ({
	currentVerseData,
	handleRandomVerse,
	handleAddToFavorites,
	isMaxFav,
	isAlreadyFav,
}) => {
	return (
		<div class="display-container">
			<h1> From: {currentVerseData.name}</h1>
			<h2> {currentVerseData.book} </h2>
			<p>
				{' '}
				{currentVerseData.chapter}:{currentVerseData.verse}{' '}
			</p>
			<p> {currentVerseData.text}</p>
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
	)
}

export default DisplayVerse
