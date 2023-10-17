export const ImageDetails = ({ work, viewArt }) => {
	const {artist, title, image_id, alt_text } = work

	const imageUrl = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`


	return (
		<>
			<h2>{title}</h2><p>by {artist}</p>
			<img alt={alt_text} src={imageUrl} ></img>
			<button onClick={() => viewArt(null)}>Back</button>
		</>
	)
} 
