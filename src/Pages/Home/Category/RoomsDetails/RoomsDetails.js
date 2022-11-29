import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RoomsDetails = () => {
    const roomDetails= useLoaderData();
    
   
    return (
        <div>
           { 
           roomDetails.map(details =>
             <p>{details.name}</p>)
           }
            
        </div>
    );
};

export default RoomsDetails;