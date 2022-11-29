import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import RoomsDetails from '../RoomsDetails/RoomsDetails';

const Rooms = () => {

    const data = useLoaderData();
    console.log(data)
    // const{name,_id,seller,original,resale,yearofuse,img,location} = data
    
    return (
        <div>
            <h2>hello sitting</h2>
            <Link to='/allCollection'>Room Details</Link>
           <RoomsDetails></RoomsDetails>
        </div>
    );
};

export default Rooms;