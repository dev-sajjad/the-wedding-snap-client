import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { PhotoProvider, PhotoView } from "react-photo-view";
import TopBanner from "./TopBanner";
import ShortBannerImg from "../../../src/assets/ShortBanner/wedding.jpg";
import Reviews from "./Reviews/Reviews";
import AddReview from "./Reviews/AddReview";
import { AuthContext } from "../../contexts/AuthProvider";
import Loading from "../Shared/Loading/Loading";

const ServiceDetails = () => {
  // get current params from the url
  const serviceParam = useParams();
  const { id } = serviceParam;
  const [serviceDetails, setServiceDetails] = useState({});
  // reviews state and load specific reviews
  const [reviews, setReviews] = useState([]);
  //loading state
  const [loading, setLoading] = useState(false)

  //get user from authcontext
  const { user } = useContext(AuthContext);

  const {
    service_id,
    service_name,
    price,
    image,
    duration,
    rating,
    description,
  } = serviceDetails;

  // load specific service details data
  useEffect(() => {
    setLoading(true)
    fetch(`https://the-wedding-snap-server.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoading(false)
        }
        return setServiceDetails(data.data);
      });
  }, [id]);

  // load specific service related data
  useEffect(() => {
    setLoading(true)
    fetch(
      `https://the-wedding-snap-server.vercel.app/reviews/${serviceDetails?.service_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoading(false)
        }
        return setReviews(data.data);
      });
  }, [serviceDetails?.service_id]);

  // top banner data
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
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20">
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
            <h1 className="text-3xl mb-4 md:text-5xl">{service_name}</h1>
            <div className="flex items-center my-3">
              <div>
                <h4 className="text-2xl mr-40 md:mr-60 lg:mr-80 font-semibold bg-slate-200 rounded-3xl p-2">
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
      )}

      {/* reviews section */}
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-36 mb-24">
          <h3 className="text-3xl text-center mb-6">
            Total reviews: {reviews.length}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <Reviews key={review._id} review={review}></Reviews>
              ))}
            </div>
            <div>
              {user?.email ? (
                <AddReview
                  service_id={service_id}
                  service_name={service_name}
                ></AddReview>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-rose-500 font-mono text-xl text-center  italic lg:text-2xl font-semibold mb-4">
                    Opps! You are not logged In.
                  </h1>
                  <h2 className="text-black text-2xl p-2 rounded-2xl lg:text-3xl font-thin bg-slate-200">
                    Please login to add a review.
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
