import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsCameraFill } from "react-icons/bs";
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';


const Header = () => {
  const { user, userLogout } = useContext(AuthContext);

  const handleLogout = () => {
    userLogout()
      .then(result => {
      toast.success('Successfully Logout!')
      })
      .catch(error => console.error(error))
  }

    const menuItems = (
      <>
        <li className="font-semibold text-lg">
          <Link to="/">Home</Link>{" "}
        </li>
        <li className="font-semibold text-lg">
          <Link to="/services">Services</Link>{" "}
        </li>
        <li className="font-semibold text-lg">
          {user?.email ? (
            <>
              <Link to="/">My Reviews</Link>
              <Link to="/">Add Service</Link>
              <Link onClick={handleLogout} to='' >Logout</Link>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </>
    );

    return (
      <div className="navbar bg-white z-40 shadow-lg h-24 rounded-b-lg sticky top-0 p-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <div className='hidden lg:block text-6xl  text-yellow-400 mr-1 font-bold'>
            <BsCameraFill />
          </div>
          <Link to="/" className="text-md lg:text-2xl font-semibold lg:font-bold uppercase">
            The <span className='text-yellow-400'>Wedding</span> Snap
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/services" className="btn btn-warning ">
           Get Started
          </Link>
        </div>
      </div>
    );
};

export default Header;