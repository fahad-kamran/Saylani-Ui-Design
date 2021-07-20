import React from 'react';
import '../assets/css/Saylani-Annual-Report.css'
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import SaylaniAnnualReportImage from '../assets/image/Saylani-Annual-Report.jpg'

export default function SaylaniAnnualReport() {
    return (
        <>
            <TopHeader />
            <NavHeader />
            <img src={SaylaniAnnualReportImage} alt="" style={{ width: '100%', height: 'auto' }} />
            <div className="Saylani-Annual-Report">
                <div className="item">
                    <h5>2020</h5>
                    <h4>AUDIT REPORT</h4>
                    <p>Click here to download.</p>
                    <button>Download PDF</button>
                </div>
                <div className="item">
                    <h5>2019</h5>
                    <h4>AUDIT REPORT</h4>
                    <p>Click here to download.</p>
                    <button>Download PDF</button>
                </div>
                <div className="item">
                    <h5>2018</h5>
                    <h4>AUDIT REPORT</h4>
                    <p>Click here to download.</p>
                    <button>Download PDF</button>
                </div>
                <div className="item">
                    <h5>2017</h5>
                    <h4>AUDIT REPORT</h4>
                    <p>Click here to download.</p>
                    <button>Download PDF</button>
                </div>
                <div className="item">
                    <h5>2016</h5>
                    <h4>AUDIT REPORT</h4>
                    <p>Click here to download.</p>
                    <button>Download PDF</button>
                </div>
                <div className="item">
                    <h5>2015</h5>
                    <h4>AUDIT REPORT</h4>
                    <p>Click here to download.</p>
                    <button>Download PDF</button>
                </div>
            </div>

            <Footer />
        </>
    );
}