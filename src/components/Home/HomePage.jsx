import React from 'react';
import HobbyExplore from './HobbyExplore/HobbyExplore';
import HobbyCards from './HobbyCards/HobbyCards';
import AddOwn from './AddOwn/AddOwn';
import Testimonial from './Testimonial/Testimonial';
import HobbyCommunity from './HobbyCommunity/HobbyCommunity';
import Footer from '../Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <HobbyExplore/>
            <HobbyCards/>
            <AddOwn/>
            <Testimonial/>
            <HobbyCommunity/>
            <Footer/>
        </div>
    );
};

export default HomePage;