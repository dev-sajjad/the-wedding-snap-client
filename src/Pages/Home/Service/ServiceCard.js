import React from 'react';
import { BsStarFill } from "react-icons/bs";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from 'react-router-dom';



const ServiceCard = ({ service }) => {
    
    const { service_id, service_name, price, image, duration, rating, description } = service;

    return (
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <PhotoProvider>
            <PhotoView src={image}>
              <img
                className=" h-64 w-full cursor-pointer"
                src={image}
                alt="Album"
              />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl lg:text-2xl font-semibold">
            {service_name}
          </h2>
          <div className="flex justify-between items-center my-2">
            <div>
              <h4 className="text-xl font-semibold">${price}</h4>
            </div>
            <div className="flex items-center">
              <div className="text-xl font-semibold">
                <h4>{rating}</h4>
              </div>
              <div className="flex items-end text-amber-300 text-xl ml-1">
                <BsStarFill />
                <BsStarFill /> <BsStarFill /> <BsStarFill />
                <BsStarFill />
              </div>
            </div>
          </div>
          <p>{description.slice(0, 100) + "..."}</p>
          <div className="card-actions justify-between items-center mt-3">
            <h3 className="text-xl font-semibold">
              Duration:{" "}
              <span className="text-rose-600 text-xl font-mono">
                {duration}
              </span>
            </h3>
            <div>
              <Link to={`/services/${service_id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;