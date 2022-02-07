/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
//import {Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core/';
import { useParams } from 'react-router-dom';

function PetDetails() {
const {id} = useParams()
const [pets, setPet] = useState([]);
const [loading, setLoading] = useState(false)

const getPetDetails = async () => {
      setLoading(true)
      try {
        const res = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`); 
        const data = await res.json()
        setPet(data.pets)
        setLoading(false)

      }catch (error){
        alert(error.message)
      }
};


    useEffect(() => {
      window.scrollTo(0, 0)
      getPetDetails()
      }, [])

  return (
    <>
    {loading ? <h4>Loading</h4> : 
      <Grid container spacing={2}>
        {pets && pets.map((pet, key) => {
          return (
            <><Grid item xs={12} key={key}>
              <Box>
                <img alt='pet' src={pet.images[0]}/>
              </Box>
            </Grid>

              <Box sx={{display:'flex', flexDirection:'row'}} overflow='auto'>
            <Grid item xs={4} >
              <Box>
              <img alt='pet' src={pet.images[1]}/>
              </Box>
            </Grid>

            <Grid item xs={4} >
              <Box>
              <img alt='pet' src={pet.images[2]}/>
              </Box>
            </Grid>
            <Grid item xs={4} >
              <Box>
              <img alt='pet' src={pet.images[3]}/>
              </Box>
            </Grid>
            <Grid item xs={4} >
              <Box>
              <img alt='pet' src={pet.images[4]}/>
              </Box>
            </Grid>
            </Box>
              </>          
          )
        })}

      </Grid>}
    </>
  )
}

export default PetDetails;


      