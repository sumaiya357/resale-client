import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './RoomDetails.css'


const RoomsDetails = ({ singleDetails,setCategory }) => {

    const { name, img, location, ResalePrice, OriginalPrice, YearofUse, PostingTime, SellerName
    } = singleDetails
    console.log(singleDetails)

    
    // useEffect(()=>{
    //     fetch('http://localhost:5000/allCollection')
    //     .then(res => res.json())
    //     .then(data=>console.log(data))
    // },[])

    return (
        <div className="hero  bg-base-200  mt-10 mx-10 rounded box mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="image rounded-lg shadow-2xl " />
                <div>

                    <h1 className="text-2xl font-bold">{name}</h1>
                    <div  className='grid grid-cols-2'>
                    <span className="py-3"> <h4 className="text-1xl font-bold">Original Price:</h4>{OriginalPrice}</span>
                    <span className="py-3"><h4 className="text-1xl font-bold">Resale Price:</h4> {ResalePrice}</span>
                    <span className="py-3"> <h4 className="text-1xl font-bold">Year of Use:</h4> {YearofUse}</span>
                    <span className="py-3"><h4 className="text-1xl font-bold">Posting Time</h4>{PostingTime}</span>
                    <span className="py-3"><h4 className="text-1xl font-bold">Seller Name:</h4> {SellerName}</span>
                    <span className="py-3"><h4 className="text-1xl font-bold">location:</h4>{location}</span>
                    </div>
                    <button className="btn btn-primary"><label htmlFor="bookingModal"
                    onClick={()=>setCategory(singleDetails)}>Book Now</label></button>
                    
                </div>
            </div>
        </div>

    );
};

export default RoomsDetails;