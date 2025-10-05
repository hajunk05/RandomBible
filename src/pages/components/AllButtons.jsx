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
					Remove from Favorites
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
					{isMaxFav
						? '10 Favorites Saved'
						: 'Added to Favorites'}{' '}
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
