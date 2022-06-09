
import React from 'react';


const Card= ({name,email,id}) =>{
    
    return(
        <div className=' tc bg-light-green dib ma2 br3 pa3 grow pw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
            <h2> {name}</h2>
            <p>{email}</p>

        </div>
    )
    
}
export default Card;