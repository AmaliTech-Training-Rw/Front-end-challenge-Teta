import React from "react";
import NaviBar from "../components/navbar";
import Footer from "../components/Footer";
import bg from "../assets/bg.png"
import { useNavigate } from "react-router-dom";

const NotFound=()=>{

    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/')
    }
    return(
        <div  className="bg-dark main " style={{height: "auto"}}>
            <NaviBar/>
            <div className="mt-5 d-flex flex-column notfound ">
                <h1 className="mt-5 four text-center">404</h1>
                <h1 className="text-center">Error message</h1>
                <button className="text-light bg-danger p-4 mt-5 border-0 rounded fs-5" style={{width: "20em", margin:"auto"}}onClick={handleClick}>Back Home</button>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFound;