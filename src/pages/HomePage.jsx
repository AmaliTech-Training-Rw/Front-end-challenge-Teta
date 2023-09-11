import NavBar from "../components/navbar"

const HomePage = ()=>{
    return(
        <div>
            <NavBar/>
            <div className="main">
                <h1 style={{color: "red"}}>Meet</h1>
                <h2>Your favorite Starwars <br/> characters</h2>
            </div>
        </div>
    )
}


export default HomePage