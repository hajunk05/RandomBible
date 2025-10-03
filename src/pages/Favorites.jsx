const Favorites = ({ favVerses, setFavVerses }) => {
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
					</div>
				)
			})}
		</>
	)
}

export default Favorites
