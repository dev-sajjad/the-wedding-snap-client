import React from 'react';
import { Circles } from 'react-loader-spinner';

const Loading = () => {
    return (
      <div className="flex h-screen justify-center items-center">
        <Circles
          height="100"
          width="100"
          color="#fcc603"
          ariaLabel="circles-loading"
          visible={true}
        />
      </div>
    );
};

export default Loading;