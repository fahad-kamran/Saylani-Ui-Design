import React from 'react';
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Image from '../assets/image/Saylani-University.jpg';
export default function EhsaasLangarKhana() {
    return (
        <>
            <TopHeader />
            <NavHeader />
            <img src={Image} style={{ width: '100%', height: 'auto' }} alt="" />
            <p style={{ margin: '20px 10%' }}>We believe in giving women & men both an equal opportunity to gain education. They have a right to learn & should be given easy access to it. The project is to be Led by <span className="bold">Dr. Abdul Qadeer Khan.</span></p>
            <Footer />
        </>
    );
}