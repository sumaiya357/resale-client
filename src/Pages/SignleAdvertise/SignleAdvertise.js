import React from 'react';

const SignleAdvertise = ({allitems}) => {
    console.log(allitems)
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-14 mx-auto my-10  p-8'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={allitems.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{allitems.name}</h2>

                    <span className="py-3"> <span className="text-1xl font-bold">Original Price:</span>{allitems.OriginalPrice}</span>

                    <span className="py-3"><span className="text-1xl font-bold">Resale Price: </span> {allitems.ResalePrice}</span>

                    <span className="py-3"> <span className="text-1xl font-bold">Year of Use:</span> {allitems.YearofUse}</span>

                    <span className="py-3"><span className="text-1xl font-bold">Posting Time</span>{allitems.PostingTime}</span>
                    <span className="py-3"><span className="text-1xl font-bold">Seller Name:</span> 
                    {allitems.SellerName}</span>

                    <span className="py-3"><span className="text-1xl font-bold">location:</span>{allitems.location}</span>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignleAdvertise;