import React from 'react';
import err from '../../assets/image/err.png'
const ErrorPage = () => {
    return (
        <div>
         
         <div className='flex justify-center items-center mt-10 '>
         <img src={err} className="image rounded-lg shadow-2xl " style={{width:'900px', height:'600px'}} />
         </div>
        </div>
    );
};

export default ErrorPage;