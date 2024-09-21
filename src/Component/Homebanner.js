import React from 'react'
import Cardstecahers from './Cardstecahers';
import Bannerteachers from './Bannerteachers';


const Homebanner = () => {
    return (
        <div>
            <div className='head_home'>
                <header className='head_bar'>
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval="2000"
                        data-bs-scroll="infinity"
                    >
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://img.freepik.com/premium-psd/student-banner-back-school-with-pencil_1146-212.jpg" className="d-block w-100 head_images" alt="School Building" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.freepik.com/premium-vector/international-school-admission-landing-page-template-back-school-web-banner-online-kids_812236-4028.jpg" className="d-block w-100 head_images" alt="School Playground" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.freepik.com/free-vector/flat-design-online-college-sale-banner-template_23-2150593113.jpg" className="d-block w-100 head_images" alt="Classroom" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </header>
            </div>

            <Cardstecahers />
            <Bannerteachers />
        </div >
    )
}

export default Homebanner
