import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

const Cardstecahers = () => {
    const [status, setStatus] = useState([]);

    const navigate = useNavigate();


    return (
        <div className='card_home my-4'>
            <h2 className='card_main_head '> Top - Teacher's </h2>
            <div className='container'>
                <div className='row'>

                    <div className='col-md-3 my-2'>
                        <div className="card">
                            <div className='p-1'>
                                <img className="card-img-top" src="https://www.shutterstock.com/shutterstock/videos/1091010931/thumb/11.jpg?ip=x480" alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <p className="card-text cards_main_para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='read_morebtn mt-1'> Read More</button>
                            </div>
                            {/* <div className='cards_readmore_btn'>
                                <button className='read_morebtn'> Read More</button>
                            </div> */}
                        </div>
                    </div>
                    <div className='col-md-3 my-2'>
                        <div className="card">
                            <div className='p-1'>
                                <img class="card-img-top" src="https://wallpapers.com/images/featured/teacher-hnlnd76tuq5wxeaz.jpg" alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <p className="card-text cards_main_para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='read_morebtn mt-1'> Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 my-2'>
                        <div className="card">
                            <div className='p-1'>
                                <img className="card-img-top" src="https://www.shutterstock.com/shutterstock/videos/1019502358/thumb/10.jpg?ip=x480" alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <p className="card-text cards_main_para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='read_morebtn mt-1'> Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 my-2'>
                        <div className="card">
                            <div className='p-1'>
                                <img class="card-img-top image_height_size" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7U2OuWH4EsDIqDjkbCruFEMo9wCEmsrwPw&s" alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <p className="card-text cards_main_para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='read_morebtn mt-1'> Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 my-2'>
                        <div className="card">
                            <div className='p-1'>
                                <img className="card-img-top" src="https://www.shutterstock.com/shutterstock/videos/1102546153/thumb/1.jpg?ip=x480" alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <p className="card-text cards_main_para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='read_morebtn mt-1'> Read More</button>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-3 my-2'>
                        <div className="card">
                            <div className='p-1'>
                                <img className="card-img-top image_height_size" src="https://st4.depositphotos.com/4290619/41124/i/450/depositphotos_411247966-stock-photo-asian-school-teacher-with-students.jpg" alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <p className="card-text cards_main_para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='read_morebtn mt-1'> Read More</button>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-3 my-2'>
                        <div className="card">
                            <div className='p-1'>
                                <img className="card-img-top image_height_size" src="https://st2.depositphotos.com/1013513/6825/i/450/depositphotos_68257097-stock-photo-teacher-with-a-little-girl.jpg" alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <p className="card-text cards_main_para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='read_morebtn mt-1'> Read More</button>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-3 my-2'>
                        <div className="card">
                            <div className='p-1'>
                                <img className="card-img-top image_height_size" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9P0xsNqloL-XLZDID-pw0YRumc4NIwMA0eAqzGhmnrUoIMxRKnIxCBRP_w4tx2U_75BE&usqp=CAU" alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <p className="card-text cards_main_para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='read_morebtn mt-1'> Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center my-4'>
                    <button className='teachers_more' onClick={() => { navigate('/allteachers'); window.scrollTo(0, 0) }}> More </button>
                </div>
            </div>
        </div>

    )
}

export default Cardstecahers
