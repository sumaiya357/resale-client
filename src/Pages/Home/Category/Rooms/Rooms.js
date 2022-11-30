import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Modal from '../../../Modal/Modal';
import RoomsDetails from '../RoomsDetails/RoomsDetails';

const Rooms = () => {
  
    const roomDetails= useLoaderData();
    console.log('Details:',roomDetails)
   
    const [category,setCategory] =useState(null)
    
    
    return (
       <section>
         <div>
            <h2>hello sitting</h2>
         {
                roomDetails.map(singleDetails=>
                    <RoomsDetails
                    key={singleDetails.id}
                    singleDetails={singleDetails}
                    setCategory={setCategory}></RoomsDetails>)
            } 
            
           {/* <RoomsDetails id={params}></RoomsDetails> */}
        </div>
        { 
        category &&
            <Modal
            category={category}>
           </Modal>
        }
       </section>
    );
};

export default Rooms;