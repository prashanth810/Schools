import React, { useState } from 'react';
import '../Component/Nav.css';

const Contact = () => {

    return (
        <div className='contact_home'>

            <div className='text-center contact_main_heading'>
                <h2 className='contact_main_heading_h2' > Contact  <span> Us </span></h2>
            </div>

            <div className='contact_content'>
                <div className='contact_left'>
                    <img className='contact-left-img' src='https://media.istockphoto.com/id/675926198/photo/male-manager-taking-notes-in-home-office.jpg?s=612x612&w=0&k=20&c=xx2DsyGRfffRQhyuExx0Myt4HauIBKsJZZ5CkMsoXuA=' />
                </div>

                <div className='about_right_para '>
                    <h4> Our Office </h4>
                    <p className='contact_details'> 154 street, Hyderabad <br /> Hyderabad, Telangana 500038</p>
                    <p className='contact_details'> Call: <a href='tel:8106124493' className='contact_details_anchor'> +91-8106124493 </a> <br /> Email: prashanth554554@gmail.com</p>
                    <p className='contact_details_carrers'> Careers </p>
                    <p className='contact_details'>Learn more about our team and job openings...</p>
                    <button className='explore_more_btn' > Explore Jobs </button>
                </div>
            </div>


        </div>
    )
}

export default Contact;
