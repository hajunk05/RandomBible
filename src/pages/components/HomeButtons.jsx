const HomeButtons = ({
	handleRandomVerse,
	isMaxFav,
	isAlreadyFav,
	handleAddToFavorites,
	handleDeleteFavorite,
	currentVerseData,
}) => {
	if (handleAddToFavorites === null) {
		return (
			<>
				<button
					onClick={() =>
						handleDeleteFavorite(currentVerseData.id)
					}
				>
					{' '}
					Delete
				</button>
			</>
		)
	}
	return (
		<>
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
		</>
	)
}

export default HomeButtons
