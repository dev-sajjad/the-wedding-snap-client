import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/Service/ServiceCard';
import ShortBannerImg from '../../../src/assets/ShortBanner/wedding.jpg'

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
            return setServices(data)
        })
    },[])

    return (
      <div>
        <div
          className="hero h-28 md:h-36 lg:h-56 rounded-b-md  overflow-hidden"
          style={{
            backgroundImage: `url("${ShortBannerImg}")`,
          }}
        >
          <div className="hero-overlay rounded-b-lg bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                Services
              </h1>
              <iframe
                className="h-1 max-w-md md:h-2 lg:h-3 "
                title="line"
                src="https://embed.lottiefiles.com/animation/55715"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
          {services.map((service) => (
            <ServiceCard
              service={service}
              key={service.service_id}
            ></ServiceCard>
          ))}
        </div>
      </div>
    );
};

export default Services;