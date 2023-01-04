import React from 'react';

const ReviewCard = ({ review }) => {
      const { service_id, service_name, text } = review;

   
    return (
      <div>      
        <div className="card w-96 h-full bg-transparent border mx-auto border-warning shadow">
          <div className="card-body items-center text-center">
            <h4>{service_id}</h4>
            <h2 className="card-title bg-amber-100 p-2 rounded-md">
              {service_name}
            </h2>
            <p className="font-sans">{text}</p>
            <div className="card-actions mt-4 justify-end">
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-error">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ReviewCard;