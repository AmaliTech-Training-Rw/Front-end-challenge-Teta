import React from "react";
import NaviBar from "../components/navbar";
import CarouselComponent from "../components/CarouselComponent";
import Card from "react-bootstrap/Card";
import Char from "../assets/char1.png"
import Char1 from "../assets/char2.png"
import char2 from "../assets/char3.png"
import Footer from "../components/Footer"


const HomePage = ()=>{

    return(
        <div className="bg-dark main">
            <NaviBar/>
            <CarouselComponent/>
            <div className="recent mt-5 pb-5">
                <h1 className="mb-4">Recently viewed</h1>
                <div className="d-flex mx-1 mt-5 justify-content-around cards" >
                    <Card style={{width: '28rem'}} className="bg-black border border-3 border-secondary  card">
                        <Card.Img src={Char} className="mx-3"/>
                        <Card.Text className="text-light text-decoration-underline fs-5 mx-5 mb-5">View</Card.Text>
                    </Card>
                    <Card style={{width: '28rem'}} className="bg-black border border-3 border-secondary mx-5 px-4 card ">
                        <Card.Img src={Char1} style={{width:'17rem'}} className="mx-5"/>
                        <Card.Text className="text-light text-decoration-underline fs-5 mx-5 ">View</Card.Text>

                    </Card>
                    <Card style={{width: '28rem'}} className="bg-black border border-3 border-secondary mx-5 px-5 pt-5 card">
                        <Card.Img src={char2} style={{width:'17rem'}} className="mx-5"  />
                        <Card.Text className="text-light text-decoration-underline fs-5">View</Card.Text>

                    </Card>
                </div>

            </div>
            <Footer/>
        </div>
    )
}


export default HomePage