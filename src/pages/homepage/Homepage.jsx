import React from 'react';
import Banner from '../../components/homepage/Banner';
import Card from '../../components/homepage/Card';
import YourFriends from '../../components/homepage/YourFriends';
import Footer from '../../components/shared/Footer';

const Homepage = () => {
    return (
        <>
            <Banner />
            <Card />
            <YourFriends />
        </>
    );
};

export default Homepage;