import React from "react"
import logo from "../assets/logo.png"
const Footer = ()=>{
    return(
        <div className="mt-5 pb-5 d-flex border-top border-secondary footer">
            <div className="mt-5 mx-5">
                <img src={logo} alt="logo" style={{width: "10em"}} />
            </div>
            <div className="mt-5 mx-5 w-75">
                <h3 className="fs-5 mt-4 text-center">TM & &copy; LucasFilm Ltd. All Rights Reserved.</h3>
            </div>
        </div>
    )
}


export default Footer