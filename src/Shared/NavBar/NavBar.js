import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const NavBar = () => {
    const {user,logout} = useContext(AuthContext);

    const handleLogout =() =>{
        logout()
        .then(() => {})
        .catch(err=>console.log(err))
  
        if(logout){
          alert('Logout successfull')
        }
      }
    return (
        <div>

            {/* for small screen */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li>
                            <Link to='/'>Home</Link>
                        </li>

                       {
                        user?.uid ?
                        <li>
                        <Link to='/logout'>Logout</Link>
                    </li>:
                     <li>
                     <Link to='/login'>Login</Link>
                 </li>
                       }
                        <li>
                            <Link to='/signup'>SignUp</Link>
                        </li>

                         
                        <li >
                            <Link>
                            {
                        user?.uid ?
                        <li>
                        <Link to='/logout' >Dashboard</Link>
                    </li>:
                     <li>
                     <Link to='/login' className='hidden'>Dashboard</Link>
                 </li>
                       }
                               
                            </Link>
                        </li> 

                        <li >
                            <Link>
                               My Orders
                            </Link>
                        </li>

                        <li >
                            <Link>
                              Blog
                            </Link>
                        </li>

                        <li>
                            <Link>
                              Add a Product
                            </Link>
                        </li>
                        <li>
                            <Link>
                              My Product
                            </Link>
                        </li>
                        <li>
                            <Link>
                              All Seller
                            </Link>
                        </li>
                        <li>
                            <Link>
                            All Buyer
                            </Link>
                        </li>
                        <li>
                            <Link>
                             Reported Items
                            </Link>
                        </li>
                        </ul>
                    </div>

                   
                    <Link className="btn btn-ghost normal-case text-xl bg-error-content text-white">Furnishly</Link>
                </div>
                 

                  {/* for large screen */}


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                    <li>
                            <Link to='/'>My Home</Link>
                        </li>
                        {
                        user?.uid ?
                        <li>
                        <Link ><button onClick={handleLogout}>
                        Logout</button></Link>
                    </li>:
                     <li>
                     <Link to='/login'>Login</Link>
                 </li>
                       }
                        <li>
                            <Link to='/signup'>SignUp</Link>
                        </li>

                        <li >
                            <Link>
                            {
                        user?.uid ?
                        <li>
                        <Link to='/logout' >Dashboard</Link>
                    </li>:
                     <li>
                     <Link to='/login' className='hidden'>Dashboard</Link>
                 </li>
                       }
                               
                            </Link>
                        </li>
                        <li >
                            <Link>
                               My Orders
                            </Link>
                        </li>

                        <li >
                            <Link to='/blog'>Blog
                            </Link>
                        </li>

                        <li>
                            <Link>
                              Add a Product
                            </Link>
                        </li>
                        <li>
                            <Link>
                              My Product
                            </Link>
                        </li>
                        <li>
                            <Link>
                              All Seller
                            </Link>
                        </li>
                        <li>
                            <Link>
                            All Buyer
                            </Link>
                        </li>
                        <li>
                            <Link>
                             Reported Items
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </div>
            
        </div>
    );
};

export default NavBar;