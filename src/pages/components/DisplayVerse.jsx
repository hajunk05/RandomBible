const DisplayVerse = ({
	currentVerseData,
	handleRandomVerse,
	handleAddToFavorites,
}) => {
	return (
		<div>
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
			<button onClick={() => handleAddToFavorites()}>
				Add to Favorites
			</button>
		</div>
	)
}

export default DisplayVerse
