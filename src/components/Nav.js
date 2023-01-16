import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({onGreaseSelect, onSortSelection, onSortOrder}) => {

	function handleSelect(event){
		onGreaseSelect(event.target.value)
	}

	function handleSort(event){
		onSortSelection(event.target.value)
	}

	function handleSortOrder(event){
		onSortOrder(event.target.value)
	}

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			
			<br/>
			<br/>

			<label>Filter by: </label>
			<select name="greaseSelection" id="greaseSelection" onChange={handleSelect}>
				<option value="All">All</option>
				<option value="Greased">Greased</option>
				<option value="Ungreased">Ungreased</option>
			</select>

			<label> Sort by: </label>
			<select name="sortSelection" id="sortSelection" onChange={handleSort}>
				<option value="Name">Name</option>
				<option value="Weight">Weight</option>
			</select>

			<select name="sortOrder" id="sortOrder" onChange={handleSortOrder}>
				<option value="Ascending">Ascending</option>
				<option value="Descending">Descending</option>
			</select>
		</div>
	);
};

export default Nav;
