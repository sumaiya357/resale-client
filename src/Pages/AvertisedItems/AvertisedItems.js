import React, { useEffect, useState } from 'react';
import axios, { all } from 'axios';
import SignleAdvertise from '../SignleAdvertise/SignleAdvertise';


const AvertisedItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/advertisedItems')
            // axios.get('https://product-resale-server-vert.vercel.app/category')
            .then(data => {
                const itemsLoaded = data.data;
                // console.log(data)
                console.log(itemsLoaded)
                setItems(itemsLoaded)
                
            })

               
            })


    return (
        <div className=" grid grid-cols-1 place-items-center">
             <div className="grid w-48 h-20 bg-base-300 place-items-center text-2xl text-error-content font-bold rounded mt-10 mb-10">Avertised Items
             </div>

           <div>
           {
            items.map(allitems => 
                    <SignleAdvertise allitems={allitems}></SignleAdvertise>
                )}
           </div>

        </div>

    );
};

export default AvertisedItems;