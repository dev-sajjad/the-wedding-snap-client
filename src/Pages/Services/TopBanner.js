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
            <iframe
              className="h-1 max-w-md md:h-2 lg:h-3 flex justify-center"
              title="line"
              src="https://embed.lottiefiles.com/animation/55715"
            ></iframe>
          </div>
        </div>
      </div>
    );
};

export default TopBanner;