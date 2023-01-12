import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Rooms from '../Pages/Home/Category/Rooms/Rooms';
import RoomsDetails from '../Pages/Home/Category/RoomsDetails/RoomsDetails';


import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Orders from './Orders/Orders';
import PrivateRoute from './PrivateRoute/PrivateRoute';

 export const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader: async()=>{
                        return fetch('https://product-resale-server-vert.vercel.app/category')
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
                    path:'/blog',
                    element:<Blog></Blog>
                },
                {
                    path:'/orders',
                    element:<Orders></Orders>
                },
                {
                    path:'/dashboard',
                    element:<Dashboard></Dashboard>
                },
                {
                    path:'/category/:id',
                 
                    element:<PrivateRoute> <Rooms></Rooms> </PrivateRoute>,
                    loader: ({params})=>fetch(`https://product-resale-server-vert.vercel.app/allcategory/${params.id}`)
                     
                }
           
            ]
        },
        {
            path:'/*',
            element:<ErrorPage></ErrorPage>
        },
    ])
 

export default router;