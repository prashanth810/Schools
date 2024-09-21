import React from 'react';
import './Nav.css';
import teacher from '../imges/teachers.png'

const Bannerteachers = () => {
    return (
        <div className='banner_teachers_home'>
            <div className='container banner_teachers_home_container' >
                <div className='row'>
                    <div className='col-md-8 banner_teachers_home_left'>
                        <h1 className='banner_teachers_home_title'>Best Teachers <br />
                            one whose occupation is to instruct</h1>
                        <button className='banner_teachers_home_create_btn'> create account </button>
                    </div>
                    <div className='col-md-4 banner_teachers_home_img'>
                        <img src={teacher} width="100%" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bannerteachers
