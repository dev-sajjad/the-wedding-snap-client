import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Question from '../Question/Question';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <About />
            <Question />
        </div>
    );
};

export default Home;