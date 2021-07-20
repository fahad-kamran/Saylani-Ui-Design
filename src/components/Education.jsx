import React from 'react';
import '../assets/css/education.css'
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Image from '../assets/image/education.jpeg';
export default function Education() {
    return (
        <>
            <TopHeader />
            <NavHeader />
            <img src={Image} style={{ width: '100%', height: 'auto' }} alt="" />
            <h2>Available Programs</h2>
            <div className="AvailProgram">
                <div className="program">
                    <h3>Web & Mobile</h3>
                </div>
                <div className="program">
                    <h3>Graphic Designing</h3>
                </div>
                <div className="program">
                    <h3>CCO</h3>
                </div>
                <div className="program">
                    <h3>CCA</h3>
                </div>
                <div className="program">
                    <h3>Python</h3>
                </div>
                <div className="program">
                    <h3>CCNA</h3>
                </div>
                <div className="program">
                    <h3>IT Essential</h3>
                </div>
            </div>
            <h2>Vacational Programs</h2>
            <div className="AvailProgram">
                <div className="program">
                    <h3>RO Plant</h3>
                </div>
                <div className="program">
                    <h3>Bike Repairing</h3>
                </div>
                <div className="program">
                    <h3>Mobile Repairing</h3>
                </div>
                <div className="program">
                    <h3>Textile Training</h3>
                </div>
            </div>
            <Footer />
        </>
    );
}