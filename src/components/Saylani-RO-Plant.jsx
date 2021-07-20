import React from 'react';

import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Image from '../assets/image/Saylani-RO-Plant.jpg';
export default function SaylaniROPlant() {
    return (
        <>
            <TopHeader />
            <NavHeader />
            <img src={Image} style={{ width: '100%', height: 'auto' }} alt="" />
            <h2 style={{ margin: '20px 5%' }}>
                SAYLANI WELFARE INTERNATIONAL TRUST KARACHI ALL R.O PLANTS</h2>
            <div className="AvailProgram">
                <div className="program">
                    <h3>JINNAH COLLEGE R.O PLANT</h3>
                </div>
                <div className="program">
                    <h3>KORANGI KARIMIA QADRIA R.O PLANT</h3>
                </div>
                <div className="program">
                    <h3>KORANGI BHAIJAN CHOWK R.O PLANT</h3>
                </div>
                <div className="program">
                    <h3>HIGHWAY R.O PLANT</h3>
                </div>
                <div className="program">
                    <h3>RAZZAQABAD R.O PLANT</h3>
                </div>
                <div className="program">
                    <h3>SIDDQUE GOTH R.O PLANT</h3>
                </div>
                <div className="program">
                    <h3>MODEL COLONY R.O PLANT</h3>
                </div>
                <div className="program">
                    <h3>DALMIA SCHOOL R.O PLANT</h3>
                </div>
                <div className="program">
                    <h3>DALMIA UC R.O PLANT</h3>
                </div>
                <div className="program">
                    <h3>BALDIA PTC R.O PLANT</h3>
                </div>
                <div className="program">
                    <h3>BALDIA NOOR UL QURAN R.O PLANT</h3>
                </div>
            </div>

            <Footer />
        </>
    );
}