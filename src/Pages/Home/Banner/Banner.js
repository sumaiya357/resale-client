import React from 'react';
import img1 from '../../../assets/image/img1.jpg'
import img2 from '../../../assets/image/img2.jpeg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-1/2 mx-auto my-14 border-inherit border-2 shadow-2xl">
                <div id="slide1" className="carousel-item relative w-full  ">
                    <img src={img1} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img className='w-full' src={img2} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
             
          
            </div>
        </div>
    );
};

export default Banner;