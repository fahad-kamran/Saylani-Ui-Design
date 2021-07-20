import React from 'react';
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Image from '../assets/image/Online-Taweezat-Istikhara.jpg';

export default function OnlineTaweezatIstikhara() {
    return (
        <>
            <TopHeader />
            <NavHeader />
            <img src={Image} style={{ width: '100%' }} alt="" />
            <div style={{ margin: '30px 10%' }}>
                <p>Saylani wants to light up the souls of people in addition to lighting up their lives. To do so, collective duas and scholarly gatherings are held each month to help create religious awareness amongst people. Numerous people gather to listen and pray with us.
                    <br />
                    <br />
                    Furthermore, people often seek spiritual guidance for their various problems, religious, worldly or personal. Hazrat Maulana Bashir Ahmed Farooqui, a learned and gifted religious scholar and founder of Saylani Welfare International Trust provides solutions to people’s problems through the Istakhara service so that they may take better decisions in their matters. People can avail these services through emails, telephone, letters or in person.
                    <br />
                    <br />
                    Email : istikhara@saylaniwelfare.com  </p>
            </div>
            <Footer />
        </>
    )
}