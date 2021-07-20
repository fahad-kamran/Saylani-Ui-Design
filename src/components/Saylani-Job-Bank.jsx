import React from 'react';
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Image from '../assets/image/Saylani-Job-Bank.jpg';


export default function SaylaniJobBank() {
    return (
        <>
            <TopHeader />
            <NavHeader />
            <img src={Image} style={{ width: '100%' }} alt="" />
            <p style={{ margin: '30px' }}>Leave that Page blank = Write there ===== Page Under Construction</p>
            <Footer />
        </>
    )
}