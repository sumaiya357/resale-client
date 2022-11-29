import React, { useEffect, useState } from 'react';
import dining from '../../../assets/dining/dining6.jpeg'
import bed from '../../../assets/bed/bed4.jpeg'
import sitting from '../../../assets/sitting/sitting-6.jpg'
import { Link } from 'react-router-dom';
const Category = ({data}) => {
//     const{_id,name} =data
//  console.log(name,_id)
    // const[sittingRoom, setSittingRoom]=useState([])

    // useEffect( () => {
    //     fetch(`http://localhost:5000/sitting/_id`)
    //     .then(res => res.json())
    //     .then(data => setSittingRoom(data))
    // },[])
    return (

        <div >
            
         
            <Link to={`/category/${data._id}`}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
               
               <figure><img className='w-full' src={data.img} alt="dining table" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Furnitures for {data.name}</h2>
                    
                    <div className="card-actions justify-end">
                    <Link >
                       <button className="btn btn-primary">See Details</button>
                       </Link>
                    </div>
                </div>
               
            </div>
            </Link>
        </div>
    );
};

export default Category;