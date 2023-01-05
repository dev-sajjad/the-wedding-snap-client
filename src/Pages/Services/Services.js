import React, { useEffect, useState } from "react";
import ServiceCard from "../Home/Service/ServiceCard";
import ShortBannerImg from "../../../src/assets/ShortBanner/wedding.jpg";
import TopBanner from "./TopBanner";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://the-wedding-snap-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        return setServices(data.data);
      });
  }, []);

  const bannerData = {
    name: "Services",
    img: ShortBannerImg,
  };

  return (
    <div>
      <TopBanner
        BannerImg={bannerData.img}
        BannerName={bannerData.name}
      ></TopBanner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
        {services.map((service) => (
          <ServiceCard service={service} key={service.service_id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
