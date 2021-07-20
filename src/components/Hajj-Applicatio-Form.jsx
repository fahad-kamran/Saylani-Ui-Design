
import React from "react";
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Image from '../assets/image/Hajj-Application-Form.jpeg'

function HajjApplicatioForm() {
  return (
    <>
      <TopHeader />
      <NavHeader />
      <img src={Image} alt="" style={{ width: '100%' }} />
      <p style={{ margin: '20px 10%' }}>Click to Download Hajj Application Form</p>
      <Footer />
    </>
  );
}

export default HajjApplicatioForm;
