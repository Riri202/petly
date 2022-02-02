/* eslint-disable react/jsx-key */
// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import {Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Dog from '../assets/Dog.png'
import Cat from '../assets/Cat.png'
import Bird from '../assets/Bird.png'
import Rabbit from '../assets/Rabbit.png'
import Reptile from '../assets/Reptile.png'

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
       {loading ? <h1>Loading page</h1> : <><Typography variant='h5' style={{ color:'#344062', marginTop: 70, marginLeft: 90, marginBottom: 30 }}>Search results</Typography><Container className='card-wrapper'>
       <Grid container spacing={5}> {pet && pet.map((animals, key) => {
                        const { animal, images, name, breed, city, state } = animals;
                        return ( 
                            <Grid item xs={12} sm={6} md={4}>
                               <CardItem key={key}
                            src={images[0]}
                            text={name}
                            breed={breed}
                            city={city}
                            state={state}
                            src2={animal ==='dog' ? Dog : animal ==='cat' ? Cat : animal ==='bird' ? Bird : animal ==='rabbit' ? Rabbit : animal ==='reptile' ? Reptile : null } />
                            </Grid>
                            );
                    })}
                    </Grid>
                </Container></>} 
        </> );
}




export default Cards;
