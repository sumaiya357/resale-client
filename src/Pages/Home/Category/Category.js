import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import './Category.css'

const Category = ({data}) => {

    return (

        <div >
            
         
            <Link to={`/category/${data._id}`}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
               
               <figure><img className='w-full img' src={data.img} alt="dining table" /></figure>
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