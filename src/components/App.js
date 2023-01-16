import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
	const [greaseSelection, setGreaseSelection] = useState("All");
	const [sortSelection, setSortSelection] = useState("Name");
	const [sortOrder, setSortOrder] = useState("Ascending");

	function onGreaseSelect(selection){
		setGreaseSelection(selection)
	}

	function onSortSelection(selection){
		setSortSelection(selection)
	}

	function onSortOrder(selection){
		setSortOrder(selection)
	}

	return (
		<div className="App">
			<Nav onGreaseSelect={onGreaseSelect} 
				  onSortSelection={onSortSelection} 
				  onSortOrder={onSortOrder}/>
			<HogList hogs={hogs} 
						greaseSelection={greaseSelection} 
						sortSelection={sortSelection}
						sortOrder={sortOrder}/>
		</div>
	);
}

export default App;
