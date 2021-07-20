
import React from 'react';
import '../assets/css/form.css'
import TopHeader from './topHeader';
import NavHeader from './NavHeader';
import Footer from './Footer';
import AccountBoxIcon from '@material-ui/icons/AccountBox';



export default function MasajidOnlineAdmissionForm() {
    return (
        <>
            <TopHeader />
            <NavHeader />
            <div className="form-container">
                <div className="form card">
                    <div className="form-haider">
                        <AccountBoxIcon style={{ fontSize: 50 }} />
                        <h3>Online Masajid Form</h3>
                    </div>
                    <h6>Student Name</h6>
                    <input type="text" />
                    <h6>Father's Name</h6>
                    <input type="text" />
                    <h6>Date of Birth</h6>
                    <input type="Date" />
                    <h6>Age</h6>
                    <input type="text" />
                    <h6>Gender</h6>
                    <select>
                        <option value="">Select Gender</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                    </select>
                    <h6>Select Course</h6>
                    <select>
                        <option value="">Select Course</option>
                        <option value="">Ilm-o-Fehmo-o-denn Course</option>
                    </select>
                    <h6>Email</h6>
                    <input type="text" />
                    <h6>Skype Id</h6>
                    <input type="text" />
                    <h6>Country</h6>
                    <input type="text" />
                    <h6>Cell Number</h6>
                    <input type="text" />
                    <h6>Whatsapp Number</h6>
                    <input type="text" />
                    <p>Upload you recent Image (face front without glasses and with a single-colored background)</p>
                    <input type="file" />
                    <input class="InputBtn" type="button" value="Register Now" />
                </div>
            </div>
            <Footer />
        </>
    )
}