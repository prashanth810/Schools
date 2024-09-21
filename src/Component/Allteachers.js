import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Allteachers = () => {
    const [selectedSubject, setSelectedSubject] = useState("All");
    const [show, setShow] = useState(false);

    const [status, setStatus] = useState([]);
    const getallteachers = () => {
        fetch(`https://freetestapi.com/api/v1/teachers`)
            .then((res) => res.json())
            .then((resp) => {
                setStatus(resp)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getallteachers();
    }, []);


    return (
        <div className='alltecter_home'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'>
                        <button className={`show_hide subject_changing_btn ${selectedSubject === "All" ? "activecolor_bg" : ""}`} onClick={() => setShow((prev) => !prev)}>
                            Filter
                        </button>

                        {show ? (
                            <div>

                                <div>
                                    <button className={`subject_changing_btn ${selectedSubject === "All" ? "activecolor_bg" : ""}`} onClick={() => setSelectedSubject("All")}>
                                        All - Teacher's
                                    </button>
                                </div>
                                <div>
                                    <button className={`subject_changing_btn ${selectedSubject === "Telugu" ? "activecolor_bg" : ""}`} onClick={() => setSelectedSubject("Telugu")}>
                                        Telugu
                                    </button>
                                </div>
                                <div>
                                    <button className={`subject_changing_btn ${selectedSubject === "Hindi" ? "activecolor_bg" : ""}`} onClick={() => setSelectedSubject("Hindi")}>
                                        Hindi
                                    </button>
                                </div>
                                <div>
                                    <button className={`subject_changing_btn ${selectedSubject === "English" ? "activecolor_bg" : ""}`} onClick={() => setSelectedSubject("English")}>
                                        English
                                    </button>
                                </div>
                                <div>
                                    <button className={`subject_changing_btn ${selectedSubject === "Math" ? "activecolor_bg" : ""}`} onClick={() => setSelectedSubject("Math")}>
                                        Math
                                    </button>
                                </div>
                                <div>
                                    <button className={`subject_changing_btn ${selectedSubject === "Physics" ? "activecolor_bg" : ""}`} onClick={() => setSelectedSubject("Physics")}>
                                        Physics
                                    </button>
                                </div>
                                <div>
                                    <button className={`subject_changing_btn ${selectedSubject === "Bio science" ? "activecolor_bg" : ""}`} onClick={() => setSelectedSubject("Bio science")}>
                                        Bio Science
                                    </button>
                                </div>
                                <div>
                                    <button className={`subject_changing_btn ${selectedSubject === "Social" ? "activecolor_bg" : ""}`} onClick={() => setSelectedSubject("Social")}>
                                        Social
                                    </button>
                                </div>
                            </div>
                        ) : ("")}

                    </div>
                    <div className='col-md-10'>

                        {selectedSubject === "All" && <div>

                            <div className='container'>
                                <div className='row'>
                                    {status.map((val, i) => {
                                        return (
                                            <div className='col-md-3 my-2' key={i}>
                                                <div className="card">
                                                    <div className='p-1'>
                                                        <img className="card-img-top" src={val.image} alt="Card image cap" />
                                                    </div>
                                                    <div className="card-body">
                                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                            <p>{val.name}</p>
                                                            <p>Age : {val.age}</p>
                                                        </div>
                                                        <p className="card-text cards_main_para"> Subject's : {val.subjects.join(", ")} </p>
                                                        <p className="card-text cards_main_para"> Experience : {val.years_of_experience} Years </p>

                                                        <Link to={`/teachers/${val.id}`}>
                                                            <button className="single_checkbtn"> Read More</button>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>}
                        {selectedSubject === "Telugu" && <div>
                            <div className='container'>
                                <div className='row'>
                                    {status.filter(val => val.gender === "Male").map((val, i) => {
                                        return (
                                            <div className='col-md-3 my-2' key={i}>
                                                <div className="card">
                                                    <div className='p-1'>
                                                        <img className="card-img-top" src={val.image} alt="Card image cap" width='100px' />
                                                    </div>
                                                    <div className="card-body">
                                                        <p>{val.name}</p>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <p className="card-text cards_main_para"> {val.gender}</p>
                                                            <p className="card-text cards_main_para">Age : {val.age}</p>
                                                        </div>
                                                        <Link to={`/teachers/${val.id}`}>
                                                            <button className="single_checkbtn"> Read More</button>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>}

                        {selectedSubject === "Hindi" && <div>
                            <div className='container'>
                                <div className='row'>
                                    {status.filter(val => val.gender === "Female").map((val, i) => {
                                        return (
                                            <div className='col-md-3 my-2' key={i}>
                                                <div className="card">
                                                    <div className='p-1'>
                                                        <img className="card-img-top" src={val.image} alt="Card image cap" width='100px' />
                                                    </div>
                                                    <div className="card-body">
                                                        <p>{val.name}</p>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <p className="card-text cards_main_para"> {val.gender}</p>
                                                            <p className="card-text cards_main_para">Age : {val.age}</p>
                                                        </div>
                                                        <Link to={`/teachers/${val.id}`}>
                                                            <button className="single_checkbtn"> Read More</button>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>}

                        {selectedSubject === "English" && (
                            <div>
                                <div className='container'>
                                    <div className='row'>
                                        {status.filter(val => val.subjects.includes("English")).map((val, i) => {
                                            return (
                                                <div className='col-md-3 my-2' key={i}>
                                                    <div className="card">
                                                        <div className='p-1'>
                                                            <img className="card-img-top" src={val.image} alt="Card image cap" width='100px' />
                                                        </div>
                                                        <div className="card-body">
                                                            <p>{val.name}</p>

                                                            <p className="card-text cards_main_para"> {val.subjects.join(", ")} </p>
                                                            <p className="card-text cards_main_para"> Experience : {val.years_of_experience}</p>

                                                            <Link to={`/teachers/${val.id}`}>
                                                                <button className="single_checkbtn"> Read More</button>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {selectedSubject === "Math" && (
                            <div>
                                <div className='container'>
                                    <div className='row'>
                                        {status.filter(val => val.subjects.includes("Mathematics")).map((val, i) => {
                                            return (
                                                <div className='col-md-3 my-2' key={i}>
                                                    <div className="card">
                                                        <div className='p-1'>
                                                            <img className="card-img-top" src={val.image} alt="Card image cap" width='100px' />
                                                        </div>
                                                        <div className="card-body">
                                                            <p>{val.name}</p>

                                                            <p className="card-text cards_main_para"> {val.subjects.join(", ")} </p>
                                                            <p className="card-text cards_main_para"> Experience : {val.years_of_experience}</p>

                                                            <Link to={`/teachers/${val.id}`}>
                                                                <button className="single_checkbtn"> Read More</button>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {selectedSubject === "Physics" && (
                            <div>
                                <div className='container'>
                                    <div className='row'>
                                        {status.filter(val => val.subjects.includes("Physics")).map((val, i) => {
                                            return (
                                                <div className='col-md-3 my-2' key={i}>
                                                    <div className="card">
                                                        <div className='p-1'>
                                                            <img className="card-img-top" src={val.image} alt="Card image cap" width='100px' />
                                                        </div>
                                                        <div className="card-body">
                                                            <p>{val.name}</p>

                                                            <p className="card-text cards_main_para"> {val.subjects.join(", ")} </p>
                                                            <p className="card-text cards_main_para"> Experience : {val.years_of_experience}</p>

                                                            <Link to={`/teachers/${val.id}`}>
                                                                <button className="single_checkbtn"> Read More</button>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {selectedSubject === "Bio science" && (
                            <div>
                                <div className='container'>
                                    <div className='row'>
                                        {status.filter(val => val.subjects.includes("Biology")).map((val, i) => {
                                            return (
                                                <div className='col-md-3 my-2' key={i}>
                                                    <div className="card">
                                                        <div className='p-1'>
                                                            <img className="card-img-top" src={val.image} alt="Card image cap" width='100px' />
                                                        </div>
                                                        <div className="card-body">
                                                            <p>{val.name}</p>

                                                            <p className="card-text cards_main_para"> {val.subjects.join(", ")} </p>
                                                            <p className="card-text cards_main_para"> Experience : {val.years_of_experience}</p>

                                                            <Link to={`/teachers/${val.id}`}>
                                                                <button className="single_checkbtn"> Read More</button>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {selectedSubject === "Social" && (
                            <div>
                                <div className='container'>
                                    <div className='row'>
                                        {status.filter(val => val.subjects.includes("Social Studies")).map((val, i) => {
                                            return (
                                                <div className='col-md-3 my-2' key={i}>
                                                    <div className="card">
                                                        <div className='p-1'>
                                                            <img className="card-img-top" src={val.image} alt="Card image cap" width='100px' />
                                                        </div>
                                                        <div className="card-body">
                                                            <p>{val.name}</p>

                                                            <p className="card-text cards_main_para"> {val.subjects.join(", ")} </p>
                                                            <p className="card-text cards_main_para"> Experience : {val.years_of_experience}</p>

                                                            <Link to={`/teachers/${val.id}`}>
                                                                <button className="single_checkbtn"> Read More</button>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Allteachers;
