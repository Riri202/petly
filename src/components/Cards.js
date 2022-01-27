/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import {Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
// import './Cards.css'

function Cards() {
   
const [pet, setPet] = useState([]);
const [loading, setLoading] =useState(false)

const fetchPets = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://pets-v2.dev-apis.com/pets`);
            const data = await response.json();
            setPet(data.pets);
            setLoading(false);
            
        }catch (error){
            alert(error.message);
        }
         }
       
         useEffect(() => {
            window.scrollTo(0, 0)
            fetchPets()
        }, [])

        return (
        <>
       {loading ? <h1>Loading page</h1> : <><h2>Search results</h2><Container className='card-wrapper'>
       <Grid container> {pet && pet.map((animal, key) => {
                        const { images, name, breed, city, state } = animal;
                        return ( 
                            <Grid item xs={12} sm={6} md={4}>
                               <CardItem key={key}
                            src={images[0]}
                            text={name}
                            breed={breed}
                            city={city}
                            state={state} />
                            </Grid>
                            );
                    })}
                    </Grid>
                </Container></>} 
        </> );
}




export default Cards;
