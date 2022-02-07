/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, {useEffect, useState} from 'react';

import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { GoLocation } from 'react-icons/go';
import { FaDog } from 'react-icons/fa';
import { GiScales } from 'react-icons/gi';
import {FaSearch} from 'react-icons/fa'
import {ImCancelCircle } from 'react-icons/im'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { locations, animals } from '../data/pets'

const useStyles = makeStyles({
    searchIcon: {
        backgroundColor: '#0D75FF',
        width: 200,
        height: 50,
        borderRadius:50,
        padding:5,
        color: 'white',
        marginTop: -8
        
        },
       
})

function HeroSearch() {
    const classes = useStyles();
    const [pets, setPets] = useState([]);
    const [location, setLocation] = useState('');
    const [animal, setAnimal] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchPets = async () => {
            setLoading(true)
            try {
                const res = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}`)
                const data = await res.json();
                setPets(data.pets)
                setLoading(false)
            } catch (error) {
                alert(error.message)
            }
    }

    useEffect(() => {
        window.scroll(0, 0)  
        fetchPets
    }, [])

    const handleLocationChange = (event) => {
        setLocation(event.target.value)

    }
    const handleAnimalChange = (event) => {
        setAnimal(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        fetchPets()
    }






  return <div style={{width: '50vw', height: 150, backgroundColor: '#fff', padding: 30, marginLeft: 50}}> 
<Box sx={{padding: 2, borderRadius:50, display: 'flex', flexDirection: 'row', backgroundColor: '  rgba(13, 117, 255, 0.05)'}}>
    <FormControl onSubmit={submitHandler} fullWidth>
    <InputLabel style={{marginLeft: 25}} id="location-label"> <GoLocation style={{marginRight: 7}} /> All Locations</InputLabel>
    <Select
        disableUnderline
        labelId="location-label"
        id="location-select"
        value={location}
        label="Location"
        onChange={handleLocationChange}
    >
        { locations.map((location,key) => {
            return(
                <MenuItem key={key} value={location.value}>{location.label}</MenuItem>
               
                )})
            }
    </Select>
    </FormControl>

    <FormControl onSubmit={submitHandler} fullWidth>
    <InputLabel style={{marginLeft: 25}} id="animal-label">  <FaDog style={{marginRight: 7}} />Animal</InputLabel>
    <Select
        disableUnderline
        labelId="animal-label"
        id="animal-select"
        value={animal}
        label="animal"
        onChange={handleAnimalChange}
    >
        { animals.map((animal, key) => {
            return (
                <MenuItem key={key} value={animal.value}>{animal.label}</MenuItem>
            )})
            }
    </Select>
    </FormControl>

    <FormControl onSubmit={submitHandler} fullWidth>
    <InputLabel style={{marginLeft: 25}} id="breed-label"> <GiScales style={{marginRight: 7}}/> All Breeds</InputLabel>
    <Select
        disableUnderline
        labelId="breed-label"
        id="breed-select"
        label="breed"
        
    >
        <MenuItem value={'breed'}>Breed</MenuItem>
        
    </Select>
    </FormControl>
    
    <Box className={classes.searchIcon} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <FaSearch size={25}/>
          </Box>
          
    </Box>
    <Typography style={{margin: 15}}>
              You may be looking for
    </Typography>
    <Button style={{backgroundColor: '  rgba(13, 117, 255, 0.05)', marginRight: 10}} color='primary' variant="text" endIcon={<ImCancelCircle/>}>
        Dogs
    </Button>
    <Button style={{backgroundColor: '  rgba(13, 117, 255, 0.05)'}} color='primary'  variant="text" endIcon={<ImCancelCircle/>}>
        Cats
    </Button>
  </div>;
}

export default HeroSearch;
