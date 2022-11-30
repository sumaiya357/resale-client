import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext)

    const handleLogin = data => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (

        <div className='h-[600px] flex justify-center items-center'>
            <div className='border-2 border-slate-300 p-5'>
                <h2 className='text-4xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">

                        <label className="label"><span className="label-text" >Email</span></label>

                        <input type="text"  {...register("email", { required: 'email required', })} className="input input-bordered w-full max-w-xs" />
                        <input />

                        <p className='text-red-600'>
                            {errors.email && <p role="alert">{errors.email?.message}</p>}
                        </p>
                    </div>


                    <div className="form-control w-full max-w-xs">

                        <label className="label"><span className="label-text" >Password</span></label>

                        <input type="password"  {...register("password",
                            {
                                required: 'password required',
                                minLength: { value: 6, message: 'password must be 6 or more char' },
                                pattern: { value: /(?=.*[A-Z].*[A-Z])(?=.*[0-9])/, message: 'password must be stronger' }

                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <input />

                        <p className='text-red-600'>
                            {errors.pass && <p role="alert">{errors.pass?.message}</p>}
                        </p>

                    </div>


                    <input className='btn btn-slate text-white' value='Login' type="submit" />

                </form>
                <p>New to this site? <Link to='/signup' className='text-primary'>Create new account</Link></p>
                <button className="btn btn-outline btn-success">Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;