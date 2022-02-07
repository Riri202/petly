/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
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
import Skeleton from '@material-ui/lab/Skeleton'
//import { useParams } from 'react-router-dom';
// import './Cards.css'

function Cards() {
//const {id} = useParams()   
const [pets, setPet] = useState([]);
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
       {loading ?  <Typography variant='h5' style={{ color:'#344062', marginTop: 70, marginBottom: 30 }}>Search results</Typography> : <Container className='card-wrapper'>
           <Typography variant='h5' style={{ color:'#344062', marginTop: 70, marginLeft: 90, marginBottom: 30 }}>Search results</Typography>
       <Grid container spacing={5}> {pets && pets.map((pet, key) => {
                        const {id, animal, images, name, breed, city, state } = pet;
                        return ( 
                            <Grid item xs={12} sm={6} md={4} key={key}>
                               <CardItem 
                            src={loading ? (<Skeleton variant='rectangular' width={400} height={200}/>) : images[0]}
                            text={loading ? (<Skeleton variant='text' width= '40%'/>) : name}
                            breed={ loading ? (<Skeleton variant='text' width='30%' height={10}/>) :breed}
                            city={loading ? (<Skeleton variant='text' width= '20%'/>) : city}
                            state={loading ? (<Skeleton variant='text' width= '5%'/>) :  state}
                            petID={id}
                            src2={loading ? (<Skeleton variant='circular' width= '20%'/>) :  animal ==='dog' ? Dog : animal ==='cat' ? Cat : animal ==='bird' ? Bird : animal ==='rabbit' ? Rabbit : animal ==='reptile' ? Reptile : null } />
                            </Grid>
                            );
                    })}
                    </Grid>
                </Container>} 
        </> );
}




export default Cards;


// import React from 'react'
// import { useParams } from 'react-router-dom'

// const ExploreDetails = ({ data }) => {
//   const { name } = useParams();

//   return (
//       <div className="full-detail">
//         <div className="explore-container">
//           {
//             data
//               .filter((list) => list.name === name)
//               .map((list) => (
//                 <div className="full-card" key={ list.id }>
//                   <h2>Name: {list.name}</h2>
//                   <h4>Category: {list.category}</h4>
//                 </div>
//               ))}
//         </div>
//       </div>
//   )
// }

//export default ExploreDetails