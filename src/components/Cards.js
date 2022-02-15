/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */

import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import CardSkeleton from './CardSkeleton';
import {Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Dog from '../assets/Dog.png'
import Cat from '../assets/Cat.png'
import Bird from '../assets/Bird.png'
import Rabbit from '../assets/Rabbit.png'
import Reptile from '../assets/Reptile.png'

//import { makeStyles } from '@material-ui/core'




function Cards() {

  

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
        <div style={{paddingLeft: 55, paddingRight: 55}}>
       {loading ? <> <Typography variant='h4' style={{marginTop: 70, marginBottom: 30 }}>Search results</Typography> <CardSkeleton />
        </>  : <div>
           <Typography variant='h4' style={{ marginTop: 70, marginBottom: 30 }}>Search results</Typography>
       <Grid container spacing={5}> {pets && pets.map((pet, key) => {
                        const {id, animal, images, name, breed, city, state } = pet;
                        return ( 
                            <Grid item xs={12} sm={6} md={4} key={key}>
                               <CardItem 
                            src={images[0]}
                            text={name}
                            breed={ breed}
                            city={ city}
                            state={ state}
                            petID={id}
                            src2={ animal ==='dog' ? Dog : animal ==='cat' ? Cat : animal ==='bird' ? Bird : animal ==='rabbit' ? Rabbit : animal ==='reptile' ? Reptile : null } />
                            </Grid>
                            );
                    })}
                    </Grid> 
                </div>} 
        </div> );
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