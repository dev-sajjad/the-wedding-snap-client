import React from 'react';
import bannerImg from '../../../assets/Banner/banner.jpg'
import { BsArrowRight } from "react-icons/bs";


const Banner = () => {
    return (
      <div
        className="hero min-h-screen my-10 rounded-2xl "
        style={{ backgroundImage: `url("${bannerImg}")` }}
      >
        <div className="hero-overlay rounded-2xl bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-7 text-4xl md:text-5xl lg:text-6xl tracking-normal font-extrabold font-sans">
              Make Your <span className="text-yellow-400">Wedding</span> <br />{" "}
              A Wonderful <span className="text-yellow-400">Story</span>
            </h1>
            <p className="mb-5 max-w-2xl lg:text-2xl font-thin">
              "Happy girls are the prettiest". <br /> "Here's to love, laughter,
              and happily ever after". <br /> This is squad's goals are LOVE!
            </p>
            <button className="btn btn-outline glass btn-sm lg:btn-lg mt-10">
              Discover More <BsArrowRight className="ml-1" />{" "}
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;