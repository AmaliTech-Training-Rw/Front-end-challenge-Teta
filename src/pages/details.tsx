import React, { useEffect, useState } from 'react';
import NaviBar from '../components/navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import char from "../assets/char1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface Character {
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    gender: string;
    skin_color: string;
    eye_color: string;
    hair_color: string;
    homeworld: string;
    vehicles: string[];
}

const Details=()=>{
    let result = useParams<{ name: string }>(); 
    // console.log(result.name)

    const [character, setCharacter] = useState<Character | null>(null);
    const [homeworld, setHomeworld] = useState<string | null>(null)
    const [vehicles, setVehicles] = useState<string[]>([]); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?search=${result.name}`)
            .then((response) => {
                const characterData = response.data.results[0];
                setCharacter(characterData);

                // Getting the homeworld
                axios.get(characterData.homeworld) // Use characterData instead of character
                    .then((homeworldResponse) => {
                        setHomeworld(homeworldResponse.data.name);
                        console.log(homeworldResponse.data.name);
                    })
                    .catch((error) => {
                        console.log("Error fetching homeworld: ", error);
                    })

                // Getting Vehicles
                const vehiclePromises = characterData.vehicles.map(async (vehicleUrl:string) => {
                    const vehicleResponse = await axios.get(vehicleUrl);
                    return vehicleResponse.data.name;
                });

                // Wait for all vehicle requests to complete
                Promise.all(vehiclePromises)
                    .then((vehicleNames) => {
                        setVehicles(vehicleNames);
                        console.log(vehicles); 
                    })
                    .catch((error) => {
                        console.error("Error fetching vehicles:", error.message);
                    });
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });
    }, [result.name]);

    return(
        <div className='bg-dark main'>
            <NaviBar/>
            { character ? (
                <div className='mx-5 px-5 d-flex details-main'  style={{marginTop: "6em"}}>
                    <div style={{marginLeft: "8em"}}>
                        <FontAwesomeIcon icon={faArrowLeft} className='fs-3 mb-5' style={{color:"red", cursor: "pointer"}} onClick={()=> navigate("/lister")} />
                        <h1 className='fw-bold mx-5' style={{fontSize: "36px"}}> {character.name}</h1>
                        
                        <div className='d-flex mt-5 mx-5'>
                            <div>
                                <h1 className='fw-semibold'>{character.height}</h1>
                                <h1 className='fs-3'>Height</h1>
                            </div>
                            <div className='line mx-2'></div>
                            <div>
                                <h1 className='fw-semibold mx-2'>{character.mass}</h1>
                                <h1 className='fs-3 text-center'>Mass</h1>
                            </div>
                            <div className='line mx-2'></div>
                            <div>
                            {character.birth_year && (
                                    <>
                                        <h1 className='fw-semibold mx-2'>{character.birth_year}</h1>
                                        <h1 className='fs-3 text-center'>Born</h1>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className='mx-5'>
                            <h1 className='fs-2 pt-3'>Gender: {character.gender}</h1>
                            <h1 className='fs-2 pt-3'>Skin color: {character.skin_color}</h1>
                            <h1 className='fs-2 pt-3'>Eye color: {character.eye_color}</h1>
                            <h1 className='fs-2 pt-3'>Hair color: {character.hair_color}</h1>
                            {homeworld && (
                                <>
                                    <h1 className='fs-2 pt-3'>Home world: {homeworld}</h1>
                                </>
                            )}
                            <div className='d-flex mt-4'>
                                <div className='line mx-2'></div>
                                <h1 className='fs-2 fw-bold mt-1'>Vehicles</h1>
                            </div>
                            <ul className='mt-3'>
                                {vehicles.map((vehicle, index) => (
                                    <li key={index} className='text-white fs-4'>
                                        <span className='bullet'></span>
                                        {vehicle}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='details-img-div'>
                        <img src={char} alt="character" className="details-img" />
                    </div>
                </div>
                    
            ) : (
                <div className=" mx-5 px-5" style={{marginTop: "6em"}}>
                    <h1>Loading ...</h1>
                </div>
            )}
            <Footer/>
        </div>
    );
}

export default Details;