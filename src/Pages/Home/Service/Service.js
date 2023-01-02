import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
  const [services, setServices] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        return setServices(data.data);
      });
  }, [] )
  
    return (
      <div className='mt-20'>
        <div className='text-center'>
          <h5 className='text-yellow-400 italic text-lg lg:text-2xl mb-4 font-sans'>What I Offer</h5>
          <h2 className='text-3xl lg:text-5xl font-semibold font-serif'>Real Wedding Memories <br /> Captured</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16'>
          {
            services.map(service => <ServiceCard service={service} key={service.service_id} ></ServiceCard>)
        }
        </div>
        <div className='text-center '>
          <button className='btn btn-active btn-md lg:btn-lg capitalize mt-6'>Show All</button>
        </div>
      </div>
    );
};

export default Service;