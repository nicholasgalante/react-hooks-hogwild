import React from "react";

function HogList({ hogs, greaseSelection, sortSelection, sortOrder }) {

   const visibleHogCards = hogs.filter(hog => {
      if (greaseSelection === "All") {
         return true;
      } else if (greaseSelection === "Greased") {
         return hog.greased
      } else if (greaseSelection === "Ungreased") {
         return !hog.greased
      }
   })

   if (sortSelection === "Name") {
      if (sortOrder === "Ascending") {
         visibleHogCards.sort((a, b) => {
            let fa = a.name.toLowerCase(),
               fb = b.name.toLowerCase();
            return (fa < fb) ? -1 : 1
         })
      } else {
         visibleHogCards.sort((a, b) => {
            let fa = a.name.toLowerCase(),
               fb = b.name.toLowerCase();
            return (fa < fb) ? 1 : -1
         })
      }
   } else if (sortSelection === "Weight") {
      if (sortOrder === "Ascending") {
         visibleHogCards.sort((a, b) => a.weight - b.weight)
      } else {
         visibleHogCards.sort((a, b) => b.weight - a.weight)
      }
   }

   const hogCards = visibleHogCards.map(hog => {
      return (
         
         <div className="ui five wide column" key={hog.name}>
            <div className="ui link cards">
               <div className="card">
                  <div className="image">
                     <img src={hog.image} />
                  </div>
                  <div className="left aligned content">
                     <div className="header">
                        {hog.name}
                     </div>
                     <div className="meta">
                        {(hog.greased) ? "Greased" : "Ungreased"}
                     </div>
                     <div className="description">
                        <strong>Specialty:</strong> {hog.specialty}
                        <br />
                        <strong>Weight:</strong> {hog.weight} lbs
                        <br />
                        <strong>Highest Medal:</strong> {hog['highest medal achieved']}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   })

   return (
      <div className="ui grid container">
         {hogCards}
      </div>
   )
}

export default HogList;