import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const {createUser,user,setUser,updateUser, loading,googleSignIn} = useContext(AuthContext)
    
    const [err,setErr]= useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleSignUp = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user);
            const userInfo ={
                displayName: data.username
            }
            updateUser(userInfo)
            .then(result => {})    
          .catch(error => console.log(error))

          navigate(from, {replace: true});
         })
        
           

          .catch(error => {
            console.log(error)
           setErr(error.message)})
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn =() => {
           googleSignIn(googleProvider)
           .then(result => {
            const user = result.user;
             console.log(user)
            
        })
        .catch(error => {
            console.log(error)})
    }
    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='border-2 border-slate-300 p-5'>
                    <h2 className='text-4xl'>SignUp</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>

                        <div className="form-control w-full max-w-xs">

                            <label className="label"><span className="label-text" >UserName</span></label>

                            <input type="text"{...register("username",{ required:true})}
                                className="input input-bordered w-full max-w-xs" />
                            <input />

                        </div>

                        <div className="form-control w-full max-w-xs">

                            <label className="label"><span className="label-text" >Email</span></label>

                            <input type="email" {...register("email",{ required:true})}
                                className="input input-bordered w-full max-w-xs" />
                            <input />

                        </div>


                        <div className="form-control w-full max-w-xs">

                            <label className="label"><span className="label-text" >Password</span></label>

                            <input type="password" {...register("password",
                            { required:'password required',
                            minLength:{value: 6, message:'password must be 6 or more char'},
                             pattern:{value:/(?=.*[A-Z].*[A-Z])(?=.*[0-9])/, message:'password must be stronger'}
                        })}
                                className="input input-bordered w-full max-w-xs" />
                            <input />

                            <p className='text-red-600 mb-3'>
                        {errors.password && <p role="alert">{errors.password?.message}</p>}
                        </p>  
                            {/* RADIO BUTTON */}

                            


                            <div className='mb-5'>
                            <input type="radio"
                             {...register("buyer")} name="radio-1" className="radio"  />
                            <label htmlFor="seller">
                                        <span className="label-text mr-5" >Seller</span></label>
                           

                            <input type="radio" 
                             {...register("user")}name="radio-1" className="radio" checked />
                            <label htmlFor="user">
                                        <span className="label-text ml-5" >User</span></label>
                            
                            </div>


                        </div>


                        <input className='btn btn-slate text-white' value='SignUp' type="submit" />
                      
                      <div>
                        {
                            err && <p className='text-red-600'>{err}</p>
                        }
                      </div>
                    </form>
                    <p>Already have a account? <Link to='/login' className='text-primary'>SignIn</Link></p>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Continue with Google</button>
               
                </div>
            </div>

        </div>
    );
};

export default SignUp;