import { useState, useEffect } from 'react';

import { searchArtworks } from '../api';
import { ImageDetails } from './ImageDetails';
import { SearchForm } from './SearchForm';
import { ResultList } from './ResultList'
import { Footer } from './Footer';

import './App.css';

export function App() {
	const [results, setResults] = useState(null)
	const [artToShow, setArtToShow] = useState(null)
	
	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((json) => {
			console.log(json.data[0].thumbnail)
			setResults(json.data.map(work => { return {
				image_id: work.image_id,
				title: work.title,
				artist: work.artist_title,
				year: work.date_display,
				alt_text: work.thumbnail.alt_text
			}})) 		
		});
	}

	function viewArt(work) {
		setArtToShow(work)
	}


	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{artToShow 
				? <ImageDetails 
				viewArt={viewArt} 
				work={artToShow} />
				: <>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					{results && <ResultList results={results} viewArt={viewArt} />}
				</>
			}
			<Footer />
		</div>
	);

	
}
