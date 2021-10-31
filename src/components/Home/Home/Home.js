import React from 'react';
import About from '../About/About';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Offers from '../Offers/Offers';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Offers></Offers>
            <About></About>
            <Features></Features>
          
        </div>
    );
};

export default Home;