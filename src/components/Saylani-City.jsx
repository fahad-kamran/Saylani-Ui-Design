import React from 'react';
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Image from '../assets/image/Saylani-City.jpg';
export default function SaylaniCity() {
    return (
        <>
            <TopHeader />
            <NavHeader />
            <img src={Image} style={{ width: '100%', height: 'auto' }} alt="" />
            <p style={{ margin: '20px 10%' }}>Saylani-City</p>
            <Footer />
        </>
    );
}