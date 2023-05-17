import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const { user, signInUser, googleSignIn } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signInUser(email, password)
            .then((result) => {
                console.log(result.user)
                form.reset();
            })
            .catch(error => console.log(error.message))

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    if (user) {
        return <Navigate to='/'></Navigate>
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">
                    <form onSubmit={handleLogin} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name='email' placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover">Don't have account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="form-control mt-6">
                        <button onClick={handleGoogleSignIn} className="btn btn-primary">Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;