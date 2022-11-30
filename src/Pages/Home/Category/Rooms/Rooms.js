import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import RoomsDetails from '../RoomsDetails/RoomsDetails';

const Rooms = () => {
  
    const roomDetails= useLoaderData();
    console.log('Details:',roomDetails)
   
    const params =useParams();
    console.log(params)
    // const{name,_id,seller,original,resale,yearofuse,img,location} = data
    
    return (
        <div>
            <h2>hello sitting</h2>
         {
                roomDetails.map(singleDetails=>
                    <RoomsDetails
                    key={singleDetails.id}
                    singleDetails={singleDetails}></RoomsDetails>)
            } 
            
           {/* <RoomsDetails id={params}></RoomsDetails> */}
        </div>
    );
};

export default Rooms;