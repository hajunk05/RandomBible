const Favorites = ({ favVerses, setFavVerses }) => {
	const handleDeleteFavorite = (id) => {
		const updatedFavVerses = favVerses.filter(
			(verse) => verse.id !== id
		)
		setFavVerses(updatedFavVerses)
	}

	if (favVerses.length < 1) {
		return <> It's quiet here... </>
	}

	return (
		<>
			{favVerses.map((verseData) => {
				return (
					<div
						key={verseData.id}
						style={{ border: '1px solid' }}
					>
						<h1> {verseData.name} </h1>
						<h2> {verseData.book} </h2>
						<p>
							{' '}
							{verseData.chapter}:{verseData.verse}
						</p>
						<p> {verseData.text} </p>
						<button
							onClick={() =>
								handleDeleteFavorite(verseData.id)
							}
						>
							{' '}
							Delete
						</button>
					</div>
				)
			})}
		</>
	)
}

export default Favorites
