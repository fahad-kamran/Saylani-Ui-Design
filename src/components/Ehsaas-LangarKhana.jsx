import React from 'react';
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Image from '../assets/image/Ehsaas-LangarKhana.jpeg';
export default function EhsaasLangarKhana() {
    return (
        <>
            <TopHeader />
            <NavHeader />
            <img src={Image} style={{ width: '100%', height: 'auto' }} alt="" />
            <div className="AvailProgram">
                <div className="program">
                    <h3>CHAKRA GOTH ROTI BANK</h3>
                </div>
                <div className="program">
                    <h3>KORANGI NO 2.5 ROTI BANK</h3>
                </div>
                <div className="program">
                    <h3>SURJANI ROTI BANK</h3>
                </div>
                <div className="program">
                    <h3>RISALA ROTI BANK</h3>
                </div>
                <div className="program">
                    <h3>MACHAR COLONY ROTI BANK</h3>
                </div>
                <div className="program">
                    <h3>NUMAISH ROTI BANK</h3>
                </div>

            </div>
            <Footer />
        </>
    );
}