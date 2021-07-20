import React from 'react';
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Image from '../assets/image/Online-Sadqah.jpg';


export default function OnlineSadqah() {
    return (
        <>
            <TopHeader />
            <NavHeader />
            <img src={Image} style={{ width: '100%' }} alt="" />
            <div style={{ width: '80%', marginLeft: '10%' }}>
                <br />
                <p>Every day, more than 1,000 animals are sacrificed as Sadaqqah and Aqiqa across Pakistan and the meat is distributed among the poor.</p>
                <br />
                <p>We also find people who are suffering from severe diseases such as T.B and Cancer and give the meat to them. The food is also cooked for patients at hospitals and sent to hostels for poor students.</p>
                <br />
                <p>For Our Online Sadaqqah & Aqiqa Services</p>
                <br />
                <p>Click Here: <span className="bold">Online Donations</span></p>
                <br />
                <p>Click Here: <span className="bold">Online Aqiqa</span></p>
                <br />
                <p>Click Here: <span className="bold">Online Sadqah</span></p>
                <br />
                <p>Click Here: <span className="bold">Corona Effecties</span></p>
            </div>
            <Footer />
        </>
    )
}