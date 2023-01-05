import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import TopBanner from "../Services/TopBanner";
import ReviewCard from "./ReviewCard";
import ShortBannerImg from "../../../src/assets/ShortBanner/wedding.jpg";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch(
      `https://the-wedding-snap-server.vercel.app/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyReview(data.data);
      });
  }, [user?.email]);

  const bannerData = {
    name: "My Reviews",
    img: ShortBannerImg,
  };

  return (
    <div>
      <TopBanner
        BannerImg={bannerData.img}
        BannerName={bannerData.name}
      ></TopBanner>
      <div className="text-center mt-5">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-serif ">
          Total Reviews:{" "}
          <span className="text-rose-600 text-5xl">{myReview.length}</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-14">
        {myReview.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
