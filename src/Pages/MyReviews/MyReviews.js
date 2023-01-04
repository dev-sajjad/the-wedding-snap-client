import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReview(data.data);
      });
  }, [user?.email]);

  return (
    <div className="overflow-x-auto my-20">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {myReview.map((review) => (
            <ReviewRow key={review._id} review={review}></ReviewRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
