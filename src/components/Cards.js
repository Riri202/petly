/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import { useParams } from 'react-router-dom';
import './Cards.css'

function Cards() {
    const { id } = useParams()
const [pet, setPet] = useState([]);
const [loading, setLoading] =useState(false)

const fetchPets = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
            const data = response.json();
            setPet([data.pets]);
            setLoading(false);
            
        }catch (error){
            alert(error.message);
        }
         }
         useEffect(() => {
            window.scroll(0, 0)
            fetchPets()
        }, [])

        return (
        <>
       {loading ? <h1>Loading page</h1> : <div className='card-container'>
        { pet.length > 0 ? pet.map((animal, key) => {
            return (<CardItem key={key} 
                src={animal.image[0]} 
            text={animal.name}
             breed={animal.breed} 
             city={animal.city} 
             state={animal.state}/>) 
        }) : console.log('no error')}
       </div>} 
        </> );
}




export default Cards;
