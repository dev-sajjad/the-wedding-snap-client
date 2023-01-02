import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { PhotoProvider, PhotoView } from "react-photo-view";
import TopBanner from "./TopBanner";
import ShortBannerImg from "../../../src/assets/ShortBanner/wedding.jpg";


const ServiceDetails = () => {
  const [serviceDetails, setServiceDetails] = useState({});
  const { _id, service_name, price, image, duration, rating, description } =
    serviceDetails;

  // get current params from the url
  const serviceParam = useParams();
  const { id } = serviceParam;

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        return setServiceDetails(data.data);
      });
  }, [id]);

    const bannerData = {
      name: "Service Details",
      img: ShortBannerImg,
    };
    
    
  return (
      <div>
          {/* top banner */}
      <TopBanner
        BannerImg={bannerData.img}
        BannerName={bannerData.name}
          ></TopBanner>
          {/* service details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-14">
        <div className="relative">
          <PhotoProvider>
            <PhotoView src={image}>
              <img
                className="w-full p-2 border-t-8 rounded-xl border-l-8 border-yellow-400 cursor-pointer h-auto lg:h-96"
                src={image}
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
          <h3 className="text-xl font-semibold italic bg-yellow-100 p-2 rounded-full absolute top-5 right-3">
            Duration:{" "}
            <span className="text-rose-600 not-italic">{duration}</span>
          </h3>
        </div>
        <div>
          <h1 className="md:text-5xl">{service_name}</h1>
          <div className="flex items-center my-3">
            <div>
              <h4 className="text-2xl mr-80 font-semibold bg-slate-200 rounded-3xl p-2">
                ${price}
              </h4>
            </div>
            <div className="flex bg-slate-200 rounded-3xl p-2 items-center">
              <div className="text-2xl font-semibold">
                <h4>{rating}</h4>
              </div>
              <div className="flex items-end text-amber-300  text-xl ml-1">
                <BsStarFill />
                <BsStarFill /> <BsStarFill /> <BsStarFill />
                <BsStarFill />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold italic">Descriptions:</h4>
            <p className="text-xl font-thin">{description}</p>
          </div>
          <button className="btn btn-warring w-full mt-5">
            <Link>Book Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
