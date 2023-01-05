import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch("https://the-wedding-snap-server.vercel.app/")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoading(false)
        }
        return setServices(data.data);
      });
  }, []);

  return (
    <div className="mt-20">
      <div className="text-center">
        <h5 className="text-yellow-400 italic text-lg lg:text-2xl mb-4 font-sans">
          What I Offer
        </h5>
        <h2 className="text-3xl lg:text-5xl font-semibold font-serif">
          Real Wedding Memories <br /> Captured
        </h2>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
          {services.map((service) => (
            <ServiceCard
              service={service}
              key={service.service_id}
            ></ServiceCard>
          ))}
        </div>
      )}

      <div className="text-center">
        <Link to="/services">
          <button className="btn btn-active btn-md lg:btn-lg capitalize mt-6">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
