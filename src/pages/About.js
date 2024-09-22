import React from 'react';
import '../Component/Nav.css';

const About = () => {
    return (
        <div className='about_home'>
            <div className='about_home_heading'>
                <h2 style={{ color: '#8a7f7f' }}> About  <span style={{ color: "rgb(55 65 81 " }}> Us </span></h2>
            </div>

            <div className='container about_div'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img className='about-left-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdO53VuOEdxqeF7OraVLgSFnhDmuexIe4OgjcchFQlj5f8vbGPC1DDQITJo9Huqws7aro&usqp=CAU' />
                    </div>
                    <div className='col-md-8 about_right_para '>
                        <p className='about_right_para_para'>Wellcome ,simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

                        <p className='about_right_para_para'>Wellcome ,simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

                        <h6> Our vision </h6>
                        <p className='about_right_para_para'> Wellcome ,simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book </p>
                    </div>
                </div>
            </div>


            <div className='container pt-5 pb-5'>
                <div className='row'>
                    <h6 className='why_choose_us'>Why Choose Us</h6>
                    <div className='about_content'>
                        <div className='card'>
                            <p>Wellcome ,simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className='card'>
                            <p>Wellcome ,simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className='card'>
                            <p>Wellcome ,simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
