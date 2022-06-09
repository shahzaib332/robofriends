import React from "react";
 const SearchBox=({searchChange})=>{
     return(

        <div >
     <input className='bg-lightest-blue pa3 ma2 br3'
      type="text" placeholder="Search robots" 
      onChange={searchChange}
      />
     

        </div>
     )
 }
 export default SearchBox;