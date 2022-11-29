import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Layout/Main';
import BedRoom from '../Pages/Home/Category/BedRoom/BedRoom';
import DiningRoom from '../Pages/Home/Category/DiningRoom/DiningRoom';
import SittingRoom from '../Pages/Home/Category/SittingRoom/SittingRoom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';

 export const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader: async()=>{
                        return fetch('http://localhost:5000/sitting')
                    }
                  
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/signup',
                    element:<SignUp></SignUp>
                },
                {
                    path:'/sitting',
                 
                    element:<SittingRoom></SittingRoom>,
                    loader: async()=>{
                        return fetch('http://localhost:5000/sitting')
                    }
                  
                    
                },
                {
                    path:'/bed/:id',
                    element:<BedRoom></BedRoom>
                },
                {
                    path:'/dining/:id',
                    element:<DiningRoom></DiningRoom>
                },
            ]
        },
        {
            path:'/*',
            element:<div>Page Not Found</div>
        },
    ])
 

export default router;