import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import SittingRoom from './Category/Rooms/Rooms';

const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div>
            
            <h2> My Home </h2>
            <Banner></Banner>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mx-auto my-10  p-8 '>
            {
                data.map(singleData => <Category 
                    key={singleData._id}
                    data={singleData}></Category>)
            } 
            </div>
            
            {/* <Category></Category> */}
          
        </div>
    );
};

export default Home;