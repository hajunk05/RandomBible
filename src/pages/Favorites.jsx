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
		return (
			<div id="empty-favorites-container">
				<p> It's quiet here...</p>
			</div>
		)
	}

	return (
		<div id="parent-favorites-container">
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
