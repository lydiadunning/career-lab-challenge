export function ListItem ({ work, viewArt }) {
	const {title, year, artist} = work
	const yearString = year ? `, ${year}` : ''
	const artistString = artist ? ` by ${artist}` : ''


	return <li>{title}{yearString}{artistString}  <button onClick={() => viewArt(work)}>View</button></li>
}
