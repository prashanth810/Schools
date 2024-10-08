import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Singleteachersdetails = () => {
    const [singleproduct, setSingleproducts] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://freetestapi.com/api/v1/teachers/${id}`)
            .then((res) => res.json())
            .then((resu) => {
                setSingleproducts(resu);
            });
    }, [id]);


    return (
        <div className='single_home'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='single_left'>
                            <img src={singleproduct.image} className='single_left_img' />
                        </div>
                    </div>

                    <div className='col-md-8'>
                        <div className='single_right'>

                            <h2>  {singleproduct.name}    </h2>

                            <p> <span className='fw-bold'> Experience : </span> {singleproduct.years_of_experience} Years &nbsp;
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.4905 1.50034C9.1861 1.75975 9.03389 1.88948 8.87133 1.99843C8.4987 2.24818 8.08021 2.42152 7.64013 2.5084C7.44814 2.54632 7.24879 2.56222 6.8501 2.59403C5.84838 2.67398 5.3475 2.71394 4.92964 2.86154C3.96314 3.20292 3.20292 3.96314 2.86154 4.92964C2.71394 5.3475 2.67398 5.84838 2.59403 6.8501C2.56222 7.24879 2.54632 7.44814 2.5084 7.64013C2.42152 8.08021 2.24818 8.4987 1.99843 8.87133C1.88948 9.03389 1.75977 9.18609 1.50034 9.4905C0.848541 10.2554 0.522628 10.6378 0.331528 11.0376C-0.110509 11.9625 -0.110509 13.0375 0.331528 13.9624C0.522641 14.3623 0.848541 14.7446 1.50034 15.5095C1.75973 15.8139 1.88948 15.9661 1.99843 16.1286C2.24818 16.5013 2.42152 16.9198 2.5084 17.3599C2.54632 17.5519 2.56222 17.7513 2.59403 18.1499C2.67398 19.1516 2.71394 19.6525 2.86154 20.0704C3.20292 21.0369 3.96314 21.7971 4.92964 22.1385C5.3475 22.286 5.84838 22.326 6.8501 22.406C7.24879 22.4378 7.44814 22.4538 7.64013 22.4916C8.08021 22.5785 8.4987 22.7519 8.87133 23.0016C9.03389 23.1105 9.18609 23.2403 9.4905 23.4996C10.2554 24.1515 10.6378 24.4774 11.0376 24.6685C11.9625 25.1105 13.0375 25.1105 13.9624 24.6685C14.3623 24.4774 14.7446 24.1515 15.5095 23.4996C15.8139 23.2403 15.9661 23.1105 16.1286 23.0016C16.5013 22.7519 16.9198 22.5785 17.3599 22.4916C17.5519 22.4538 17.7513 22.4378 18.1499 22.406C19.1516 22.326 19.6525 22.286 20.0704 22.1385C21.0369 21.7971 21.7971 21.0369 22.1385 20.0704C22.286 19.6525 22.326 19.1516 22.406 18.1499C22.4378 17.7513 22.4538 17.5519 22.4916 17.3599C22.5785 16.9198 22.7519 16.5013 23.0016 16.1286C23.1105 15.9661 23.2403 15.8139 23.4996 15.5095C24.1515 14.7446 24.4774 14.3623 24.6685 13.9624C25.1105 13.0375 25.1105 11.9625 24.6685 11.0376C24.4774 10.6378 24.1515 10.2554 23.4996 9.4905C23.2403 9.18609 23.1105 9.03389 23.0016 8.87133C22.7519 8.4987 22.5785 8.08021 22.4916 7.64013C22.4538 7.44814 22.4378 7.24879 22.406 6.8501C22.326 5.84838 22.286 5.3475 22.1385 4.92964C21.7971 3.96314 21.0369 3.20292 20.0704 2.86154C19.6525 2.71394 19.1516 2.67398 18.1499 2.59403C17.7513 2.56222 17.5519 2.54632 17.3599 2.5084C16.9198 2.42152 16.5013 2.24818 16.1286 1.99843C15.9661 1.88948 15.8139 1.75977 15.5095 1.50034C14.7446 0.848541 14.3623 0.522641 13.9624 0.331528C13.0375 -0.110509 11.9625 -0.110509 11.0376 0.331528C10.6378 0.522628 10.2554 0.848541 9.4905 1.50034ZM17.9669 9.82893C18.3641 9.43163 18.3641 8.7875 17.9669 8.3902C17.5696 7.99292 16.9254 7.99292 16.5281 8.3902L10.4654 14.453L8.47183 12.4595C8.07454 12.0623 7.4304 12.0623 7.03312 12.4595C6.63583 12.8568 6.63583 13.5009 7.03312 13.8983L9.74598 16.6111C10.1433 17.0084 10.7874 17.0084 11.1848 16.6111L17.9669 9.82893Z" fill="#0016E1" />
                                </svg>
                            </p>
                            <p> <span className='fw-bold'> Teact I'd no : </span> {singleproduct.id}</p>
                            <p> <span className='fw-bold'> Age : </span>  {singleproduct.age}</p>
                            <p> <span className='fw-bold'> Gender : </span> {singleproduct.gender}</p>
                            <p>  <span className='fw-bold'> Subject's : </span>  {singleproduct.subjects ? singleproduct.subjects.join(", ") : "No subjects available"}</p>

                            <h5> About &nbsp;
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 0C3.80559 0 0 3.80554 0 8.5C0 13.1944 3.80559 17 8.5 17C13.1945 17 17 13.1944 17 8.5C17 3.80554 13.1945 0 8.5 0ZM8.5 15.3C4.75049 15.3 1.7 12.2495 1.7 8.5C1.7 4.75049 4.75049 1.7 8.5 1.7C12.2496 1.7 15.3 4.75049 15.3 8.5C15.3 12.2495 12.2496 15.3 8.5 15.3ZM9.56436 5.1C9.56436 5.71628 9.11565 6.1625 8.50864 6.1625C7.87706 6.1625 7.43936 5.71628 7.43936 5.08821C7.43936 4.48456 7.88891 4.0375 8.50864 4.0375C9.11565 4.0375 9.56436 4.48456 9.56436 5.1ZM7.65186 7.65H9.35186V12.75H7.65186V7.65Z" fill="black" />
                                </svg>
                            </h5>

                            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Singleteachersdetails
