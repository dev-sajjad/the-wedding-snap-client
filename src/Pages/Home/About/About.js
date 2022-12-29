import React from "react";
import CameraMan from "../../../assets/About/men-with-camera.jpg";
import Camera from "../../../assets/About/camera.jpg";
import { BsFillPatchCheckFill, BsCamera2,BsLifePreserver } from "react-icons/bs";

const About = () => {
  return (
    <div className="hero  bg-transparent my-24">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 relative">
          <img
            alt=""
            src={CameraMan}
            className=" h-96 p-4 border-t-8 rounded-xl border-l-8 border-yellow-400  w-2/3 "
          />
          <img
            className="absolute border-r-8 border-b-8 border-yellow-400 rounded-xl rounder-br p-4 h-52 top-2/3 right-24"
            src={Camera}
            alt=""
          />
        </div>
        <div className="w-full mt-24 lg:mt-0 lg:w-1/2 ">
          <div>
            <h4 className="text-2xl font-sans italic mb-4 text-yellow-400">
              Why Choose Me
            </h4>
            <h2 className="text-3xl lg:text-5xl font-semibold font-serif">
              Adding the memories <br /> of every moment
            </h2>
            <div className="flex items-center mt-5">
              <span className="text-xl text-amber-500 p-2 bg-gray-300 rounded-full md:text-2xl lg:text-3xl mr-7">
                <BsFillPatchCheckFill />
              </span>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-serif">
                Professional
              </h3>
            </div>
            <p className="text-md lg:text-lg ml-16 lg:ml-20 font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex items-center mt-5">
              <span className="text-xl  text-amber-500 p-2 bg-gray-300 rounded-full md:text-2xl lg:text-3xl mr-7">
                <BsCamera2 />
              </span>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-serif">
                Experienced Photographer
              </h3>
            </div>
            <p className="text-md lg:text-lg  lg:ml-20 font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex items-center mt-5">
              <span className="text-xl  text-amber-500 p-2 bg-gray-300 rounded-full md:text-2xl lg:text-3xl mr-7">
                <BsLifePreserver />
              </span>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-serif">
                Support 24/7
              </h3>
            </div>
            <p className="text-md lg:text-lg lg:ml-20 font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
