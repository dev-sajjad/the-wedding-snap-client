import React from "react";
import BackImg from "../../../assets/Contact/contact.jpg";

const Question = () => {
  return (
    <div
      className="hero h-64 shadow my-28"
      style={{ backgroundImage: `url("${BackImg}")` }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl mx-auto">
          <h1 className="mb-5 tracking-normal leading-3 text-xl md:text-2xl lg:text-3xl font-serif font-medium">
            Get Exclusive Offer And Promotions
          </h1>
          <h2 className="mb-5 text-2xl md:text-3xl lg:text-4xl uppercase text-yellow-400 font-sans font-medium  max-w-xl mx-auto">
            stay informed!
          </h2>
          <div>
            <form>
              <label className="input-group flex-col lg:flex-row">
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered text-black uppercase"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered text-black uppercase"
                  required
                />
                <button className="btn btn-warning">Subscribe Now</button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
