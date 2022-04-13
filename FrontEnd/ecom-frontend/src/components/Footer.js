import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.css'


function Footer() {
    return (
        <div className='d-flex justify-content-sm-evenly mt-5 lastnav'>
            <div className="lastnavtextstyle">
                FeedBack
            </div>
            <div className="lastnavtextstyle">
                ContactUs
            </div>
            <div className="lastnavtextstyle">
                Terms
            </div>
            <div className="lastnavtextstyle">
                &#169; Copyright
            </div>
        </div>
    );
}

export default Footer;
