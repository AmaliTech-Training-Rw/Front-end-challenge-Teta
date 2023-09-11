import React from "react"
import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Char from "../assets/char1.png"
import Char1 from "../assets/char2.png"
import char2 from "../assets/char3.png"

const CarouselComponent=()=>{
    return(
        <Carousel data-bs-theme="dark" className="mb-5">
                <Carousel.Item>
                    <div className="d-flex mx-5 justify-content-around mb-5">
                        <div className="mt-5 mb-5 caption">
                            <h1 style={{color: "red"}} className="fw-bold font-24 mt-5">Meet</h1>
                            <h1 className="font-24">Your favorite Starwars <br/> characters</h1>
                        </div>
                        <div>
                            <img
                            className="d-block w-75 "
                            src={Char1}
                            alt="First slide"
                            />
                        </div> 
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex mx-5 justify-content-around mb-5">
                        <div className="mt-5 mb-5 caption">
                            <h1 style={{color: "red"}} className="fw-bold font-24 mt-5">Meet</h1>
                            <h1 className="font-24">Your favorite Starwars <br/> characters</h1>
                        </div>
                        <div>
                            <img
                            className="d-block w-100 "
                            src={Char}
                            alt="Second slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex mx-5 justify-content-around mb-5">
                        <div className="mt-5 mb-5 caption">
                            <h1 style={{color: "red"}} className="fw-bold font-24 mt-5">Meet</h1>
                            <h1 className="font-24">Your favorite Starwars <br/> characters</h1>
                        </div>
                        <div>
                            <img
                            className="d-block w-75"
                            src={Char1}
                            alt="Third slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                </Carousel>
    )
}

export default CarouselComponent