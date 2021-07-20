
import React from "react";
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Image from '../assets/image/FamilyAdoption.jpeg'

function FamilyAdoption() {
  return (
    <>
      <TopHeader />
      <NavHeader />
      <img src={Image} alt="" style={{ width: '100%' }} />
      <p style={{ margin: '5% 10%', textAlign: 'justify' }}>
        While we are always happy to lend a helping hand to individuals, helping a family live a dignified life is also important to us. Our Family Adoption Program focuses on supporting the basic financial needs of adopted families based on their sizes. We provide families with kitchen ration, pay their utility bills, house rent and school fees and finance any other daily needs they might have. Today, we are proud to say that we have adopted more than 8,500 families and our wish is to support many more in the future.
      </p>
      <Footer />
    </>
  );
}

export default FamilyAdoption;
