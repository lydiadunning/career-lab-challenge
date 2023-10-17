import {ListItem} from './ListItem'

export function ResultList({ results, viewArt }) {
	return (
		<ul>
			{results.map( work => <ListItem key={work.image_id} viewArt={viewArt} work={work}/> )}
		</ul>
	)




}
