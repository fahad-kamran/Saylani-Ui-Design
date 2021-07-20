import React from "react";
import '../assets/css/introduction.css'
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Image from '../assets/image/Introduction.jpg';
import Card1 from '../assets/image/Card1.png'
function Introduction() {
  return (
    <div className="Introduction">
     <TopHeader />
   <NavHeader />
   <img src={Image} style={{width:'100%'}} alt="" />
<div className="card-container">
  <div className="card">
<img src={Card1} alt="" />
<ul>
  <li>Darul Ifta</li>
  <li>Ameer Hamza Branch</li>
  <li>Mill Area Branch</li>
  <li>Korangi No.4 Branch</li>
</ul>
  </div>
  <div className="card">
<img src={Card1} alt="" />
<ul>
  <li>Darul Ifta</li>
  <li>Ameer Hamza Branch</li>
  <li>Mill Area Branch</li>
  <li>Korangi No.4 Branch</li>
</ul>
  </div>
  <div className="card">
<img src={Card1} alt="" />
<ul>
  <li>Darul Ifta</li>
  <li>Ameer Hamza Branch</li>
  <li>Mill Area Branch</li>
  <li>Korangi No.4 Branch</li>
</ul>
  </div>
  <div className="card">
<img src={Card1} alt="" />
<ul>
  <li>Darul Ifta</li>
  <li>Ameer Hamza Branch</li>
  <li>Mill Area Branch</li>
  <li>Korangi No.4 Branch</li>
</ul>
  </div>
</div>
   <Footer />
    </div>
  );
}

export default Introduction;
