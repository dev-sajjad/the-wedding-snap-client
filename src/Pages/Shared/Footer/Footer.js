import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div>
        <footer className="footer mt-6 p-10 bg-base-200 text-base-content rounded-t-xl">
          <div className='text-center'>
            <h2 className='text-2xl font-bold uppercase'>
              The <span className='text-yellow-400'> Wedding</span> Snap
                    </h2>
                    <p className='text-md  font-thin -mt-2 text-center text-black'>Make Your Wedding A Wonderful Story</p>
            <iframe
              title="lottie animation"
              src="https://embed.lottiefiles.com/animation/56718"
            ></iframe>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <Link className="link link-hover">Branding</Link>
            <Link className="link link-hover">Design</Link>
            <Link className="link link-hover">Marketing</Link>
            <Link className="link link-hover">Advertisement</Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Press kit</Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </div>
        </footer>
        <div className="footer footer-center p-4 bg-base-300 text-base-content">
          <p>Copyright © 2022 - All right reserved by The Wedding Snap</p>
        </div>
      </div>
    );
};

export default Footer;