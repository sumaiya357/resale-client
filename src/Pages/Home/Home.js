import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';

const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            
            <h2> My Home</h2>
            <Banner></Banner>
            <div className='text-3xl'>
                All Category
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mx-8 my-10  p-8 '>
               
            {
                categories.map(category => <Category key={category._id} category={category}></Category>)
            }
            </div>
        </div>
    );
};

export default Home;