import React, { useEffect, useState } from 'react';
import dining from '../../../assets/dining/dining6.jpeg'
import bed from '../../../assets/bed/bed4.jpeg'
import sitting from '../../../assets/sitting/sitting-6.jpg'
import { Link } from 'react-router-dom';
const Category = () => {
//     const{_id,name} =data
//  console.log(name,_id)
    // const[sittingRoom, setSittingRoom]=useState([])

    // useEffect( () => {
    //     fetch(`http://localhost:5000/sitting/_id`)
    //     .then(res => res.json())
    //     .then(data => setSittingRoom(data))
    // },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mx-8 my-10  p-8 '>
            
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={dining} alt="dining table" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Furniturs for Dining Room</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                       <Link to='/dining/:id'>
                       <button className="btn btn-primary">See Details</button>
                       </Link>
                    </div>
                </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={bed} alt="dining table" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Furniturs for Bed Room</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <Link to='/bed/:id'>
                       <button className="btn btn-primary">See Details</button>
                       </Link>
                    </div>
                </div>
            </div>
            <Link to='/sitting'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
               
               <figure><img className='w-full' src={sitting} alt="dining table" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Furniturs for Sitting Room</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
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