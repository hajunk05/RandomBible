import DisplayVerse from './components/DisplayVerse'
import './css/HomeAndFavorites.css'

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
		<div>
			{favVerses.map((verseData) => {
				return (
					<div
						key={verseData.id}
						id="compact-favorites-container"
					>
						<DisplayVerse
							currentVerseData={verseData}
							handleAddToFavorites={null}
							isMaxFav={null}
							isAlreadyFav={null}
							isLoading={null}
							isCompact={true}
							handleDeleteFavorite={handleDeleteFavorite}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default Favorites
