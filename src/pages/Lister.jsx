import React, { useState } from 'react'
import NaviBar from '../components/navbar'
import Card from "react-bootstrap/Card"
import Char from "../assets/char1.png"
import { useEffect } from 'react'
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination'
import Footer from '../components/Footer'
import Char1  from '../assets/char2.png'
import Char2  from '../assets/char3.png'
import Semi from '../components/semiNav'
import { useNavigate } from 'react-router-dom'


const Lister = () =>{
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(10);
    const [totalCharacters, setTotalCharacters] = useState(0);
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleClick =(name)=>{
        navigate(`/details/${name}`);
    }

    useEffect(()=> {
        const fetchData = async () => {
            try{
                const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
                setCharacters(response.data.results);
                setTotalCharacters(response.data.count);
            }catch(error){
                console.error("Error:", error.message);
            }
        }
        fetchData();
    }, [currentPage]);

    const filteredCharacters = characters.filter((character) => 
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return(
        <div className='bg-dark main'>
            <NaviBar/>
            <Semi setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
            <div className='d-flex flex-wrap list'>
                {filteredCharacters.map((character, index)=> (
                <Card key={index} style={{width: '28rem', backgroundColor:"red", cursor: "pointer"}} className=' card mt-5 ' onClick={()=> handleClick(character.name)}>
                    <div className='bg-black m-4 rounded' style={{width: '23rem', marginRight: '25em'}} >
                        <Card.Img src={Char1}/>
                    </div>
                    <Card.Body>
                        <Card.Title className='text-light mx-4'>{character.name}</Card.Title>

                    </Card.Body>
                </Card>
                ))}

            </div>
            <Pagination className='justify-content-end mt-3 paginationItemStyle mx-5'>
                <Pagination.Prev
                onClick={() => setCurrentPage((prevPage) => Math.max(prevPage-1, 1))}
                disabled={currentPage === 1}
                />
                {Array.from({ length: Math.ceil(totalCharacters / charactersPerPage)}).map((_, index) => (
                    <Pagination.Item
                        key={index}
                        
                        active={index + 1 === currentPage}
                        onClick={() => setCurrentPage(index + 1)}
                        
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next
                onClick={()=> 
                setCurrentPage((prevPage) => 
                prevPage < Math.ceil(totalCharacters / charactersPerPage)
                ? prevPage + 1 
                : prevPage
                )
                }
                disabled = {currentPage === Math.ceil(totalCharacters / charactersPerPage)}
                />
            </Pagination>
            <Footer/>
        </div>
    )
}

export default Lister