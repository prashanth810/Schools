import React from 'react';
import '../Component/Nav.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className='footer_home pt-5'>
            <div className='container'>
                <footer className='footer_footer'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div >
                                <div class="card-body">
                                    <div className='footer_logo'>
                                        <img className='navbar_logo_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrcmuVMzYjWqzt2opemz09M3u7J8Vny1UwQ&s' onClick={() => navigate('/')} />
                                    </div>
                                    <p className='footer_logo_para'>Configuration: Ensure you have a tailwind.config.js <br /> file in your project for the extension to recognize custom classes.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div >
                                <div class="card-body">
                                    <h5 class="card-text"> Useful links </h5>
                                    <p class="card-text footer_links" onClick={() => { navigate('/'); window.scrollTo(0, 0); }}> Home </p>
                                    <p class="card-text footer_links" onClick={() => { navigate('/about'); window.scrollTo(0, 0); }}> About </p>
                                    <p class="card-text footer_links" onClick={() => { navigate('/education'); window.scrollTo(0, 0); }}> Education </p>
                                    <p class="card-text footer_links" onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}> Contact </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div >
                                <div class="card-body">
                                    <h5 class="card-text"> Getch In Touch </h5>
                                    <p> <a className='footer_number' href='tel:8106124493' > +91-8106124493</a></p>
                                    <p className='footer_number'> prashanth554554@gmail.com </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <div className='container'>
                <p className='final_footer'> All 2024 &copy; rights reserved Little Flower School </p>
            </div>
        </div>
    )
}

export default Footer
