import React from 'react';

const TopBanner = ({BannerImg, BannerName}) => {
    return (
      <div
        className="hero h-28 md:h-36 lg:h-56 rounded-b-md  overflow-hidden"
        style={{
          backgroundImage: `url("${BannerImg}")`,
        }}
      >
        <div className="hero-overlay rounded-b-lg bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              {BannerName}
            </h1>
            
          </div>
        </div>
      </div>
    );
};

export default TopBanner;