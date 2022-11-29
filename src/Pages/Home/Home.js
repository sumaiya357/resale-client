import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import SittingRoom from './Category/SittingRoom/SittingRoom';

const Home = () => {
    // const data = useLoaderData();
    // console.log(data)
    return (
        <div>
            
            <h2> My Home </h2>
            <Banner></Banner>

             {/* {
                data.map(singleData => <SittingRoom 
                    key={singleData._id}
                    data={singleData}></SittingRoom>)
            }  */}
            <Category></Category>
          
        </div>
    );
};

export default Home;