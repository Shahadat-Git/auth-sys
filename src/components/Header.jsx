import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('successfully log out')
            })
            .catch(error => console.error(error))
    }
    return (
        <nav className="navbar bg-neutral text-neutral-content">
            <p className="ml-4  normal-case text-2xl text-blue-300 font-bold">AuthSys</p>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/order'>Order</Link>
            {
                user && <Link className="btn btn-ghost normal-case text-xl" to='/account'>Account</Link>
            }
            {
                !user && <><Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link></>
            }
            {
                user ? <>
                    <h1>{user.email}</h1>
                    <button onClick={handleLogOut} className='btn btn-secondary ml-3'>Log Out</button>
                </> : ' no user here'
            }
        </nav>
    );
};

export default Header;