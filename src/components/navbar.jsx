import Logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from  '@fortawesome/free-solid-svg-icons'

const NavBar =()=>{
    return(
        <div className="nav-main">
            <img src={Logo} alt="logo" className="logo"/>
            <div className="nav-items">
                <div>
                    <FontAwesomeIcon icon={faSearch} style={{color: "white"}}/>
                    <h3>Search</h3>
                </div>
                <div>
                    <h3>Home</h3>
                </div>
                <div>
                    <h3>Lister</h3>
                </div>
            </div>
        </div>
    )

}


export default NavBar;