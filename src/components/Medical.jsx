import React from 'react';
import '../assets/css/medical.css'
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import Image from '../assets/image/Medical.jpg';

export default function Medical() {
    return (
        <>
            <TopHeader />
            <NavHeader />
            <img src={Image} style={{ width: '100%', height: 'auto' }} alt="" />
            <div id="para">
                <p>Saylani Blood Bank & Thalessimia Centre</p>
                <p>The recently established, state of the art Saylani Blood Bank and Thalassemia Centre is furnished with modern equipment, well trained technicians, leading Hematologists, Pediatricians, and General Physicians, and offers free of cost supply of blood and blood components to the poor and the needy. Free and effective screening, counseling and continuous medical care is provided to the deserving patients with Thalassemia and other haemoglobinopathies.</p>
            </div>
            <div className="mdclHeading">
                Aims and objectives of Saylani Blood Bank & Thalassemia Center
            </div>
            <div className="container">
                <div>
                    <h5>Providing awareness about Thalassemia.</h5>
                </div>
                <div>
                    <h5>Thalassemia screening and diagnosis.</h5>
                </div>
                <div>
                    <h5>Saylani Blood Bank & Thalassemia Center also aims to provide CVS facilities to pregnant mothers with thalassemia minor.</h5>
                </div>
                <div>
                    <h5>Screening performed by FDA & WHO approved analyzer and reagents based on EISA, CLI, PCR and NAT tests.</h5>
                </div>
                <div>
                    <h5>Along with patient care, medical research is also a primary focus of Saylani Blood Bank & Thalassemia Center. We aim to conduct extensive research in the areas of thalassemia and other blood related diseases in order to keep patients, their families and the extended medical community abreast of modern research & developments.</h5>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', border: 'none',padding:'0px', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <div style={{width:'100%'}}>
                        <h5>Thalassemic patients need post transfusion chelation therapy (Removing iron from the body). This highly expensive therapy is also provided completely free of cost to patients.</h5>
                    </div>
                    <div style={{width:'100%'}}>
                        <h5>Safe blood transfusion.</h5>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}