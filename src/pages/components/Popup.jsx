import '../css/Popup.css'

const Popup = ({ isAlreadyFav }) => {
	if (!isAlreadyFav) {
		return <></>
	}

	return (
		<div id="favorite-pop-up">
			{' '}
			<p> Added to Favorites&nbsp; ✅&nbsp;&nbsp;</p>{' '}
		</div>
	)
}

export default Popup
