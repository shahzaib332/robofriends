import React from "react";
//we wrap Cardlist which contain robot list in Scroll so Scroll become parent and 
// and Cardlist become child and then we call props.children 


const Scroll=(props)=>{
    return(
        // add style here
        <div style={{overflowY: 'scroll', border: '5px solid black',height:'800px'}}>
        {props.children}
        </div>
    )
};




export default Scroll;