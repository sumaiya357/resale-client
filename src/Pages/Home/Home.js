import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import SittingRoom from './Category/Rooms/Rooms';
import axios from 'axios'
import AvertisedItems from '../AvertisedItems/AvertisedItems';

const Home = () => {
    const data = useLoaderData();
    // console.log(data)

    // const [allData, setAllData] = useState([])
    // useEffect( () => {
    //     axios.get('https://product-resale-server-vert.vercel.app/category')
    //     .then(data => {
    //         const dataLoaded = data.data.data
    //         console.log(data)


    //         const furnitureData = dataLoaded.map(singleData => <Category 
    //                 key={singleData._id}
    //                 data={singleData}></Category>)
    //         setAllData(furnitureData)
    //     })
    // })
    return (
        <div>


            <Banner></Banner>
            <div className="indicator">
               
                <div className="grid w-44 h-20 bg-base-300 place-items-center text-2xl text-error-content font-bold rounded mt-10">All Category</div>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mx-auto my-10  p-8 '>

                {
                    data.map(singleData => <Category
                        key={singleData._id}
                        data={singleData}></Category>)
                }
            </div>

            <AvertisedItems></AvertisedItems>

        </div>
    );
};

export default Home;