import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddReview = ({ service_id, service_name }) => {
  const { user } = useContext(AuthContext);

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;

    const customerReview = {
      service_id: service_id,
      customer_name: e.target.name.value,
      service_name: service_name,
      email: user?.email,
      image: e.target.photo.value,
      text: e.target.textarea.value,
      rating: e.target.rating.value ? e.target.rating.value : 5,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(customerReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          form.reset();
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-slate-200 p-10 rounded">
      <h2 className="text-3xl text-center mb-5 font-mono font-semibold">
        Please Add A Review
      </h2>
      <form onSubmit={handleAddReview}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="input input-bordered input-warning border-warning mb-4 w-full"
          required
        />
        <input
          name="photo"
          type="text"
          placeholder="Photo URL"
          alt="Customer Image"
          className="input input-warning border-warning input-bordered mb-4 w-full"
          required
        />
        <input
          name="rating"
          type="text"
          placeholder="Rating ( Optional )"
          className="input border-warning input-warning input-bordered mb-4 w-full"
        />
        <textarea
          name="textarea"
          className="textarea textarea-warning text-lg w-full mb-4 h-32"
          placeholder="Type Review Here"
          required
        ></textarea>
        <input
          className="btn btn-warning w-full capitalize text-xl"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default AddReview;
