import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Layout/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Rooms from '../Pages/Home/Category/Rooms/Rooms';
import RoomsDetails from '../Pages/Home/Category/RoomsDetails/RoomsDetails';


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
                        return fetch('http://localhost:5000/category')
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
                    path:'/category/:id',
                 
                    element:<Rooms></Rooms>,
                    loader: async({params})=>{
                            console.log(params.id)
                            return fetch(`http://localhost:5000/allcategory/${params.id}`)
                    } 
                }
           
            ]
        },
        {
            path:'/*',
            element:<ErrorPage></ErrorPage>
        },
    ])
 

export default router;