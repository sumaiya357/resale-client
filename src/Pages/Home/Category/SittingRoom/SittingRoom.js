import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SittingRoom = () => {

    const data = useLoaderData();
    // const{name,_id,seller,original,resale,yearofuse,img,location} = data
    console.log(data)
    return (
        <div>
            <h2 className='font-semibold text-3xl font-mono text-error-content mt-10'>Choose  Furnitures for your Sitting Room at a cheap rate</h2>
            {/* <p>{data.length}</p> */}
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mx-8 my-10  p-8 '>
             */}
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mx-8 my-10  p-8 '>
             {
                data.map(singleData =>
                <div >
                   
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-full'src={singleData.img}  alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{singleData.name}</h2>
                        
                       <div className='grid  gap-8  justify-start '>
                       <div className='grid grid-cols-2 gap-5 '>
                       <p>
                      <span className='font-semibold'> Original Price: </span> {singleData.OriginalPrice}
                       </p>
                        <p>
                        <span className='font-semibold'> Resale Price:  </span>  {singleData.ResalePrice}
                       </p>
                        </div>

                        <div className='grid grid-cols-3 gap-5'>
                        <p>
                        <span className='font-semibold'> Year of Use:  </span> {singleData.YearofUse}
                       </p>
                        <p>
                        <span className='font-semibold'> Seller Name:</span>  {singleData.SellerName}
                       </p>
                        <p>
                        <span className='font-semibold'> location:</span>  {singleData.location}
                       </p>
                        </div>
                        
                    
                        <div className="card-actions justify-start mt-5">
                           <Link >
                           <button className="btn btn-primary">See Details</button>
                           </Link>
                        </div>
                    </div>
                 </div>
                </div>
                </div>)
             }
             </div>
          
        </div>
    );
};

export default SittingRoom;