import React from 'react';

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


// import {Data} from '../data/pets'

const useStyles = makeStyles({
    searchIcon: {
        backgroundColor: '#0D75FF',
        width: 200,
        height: 50,
        borderRadius:50,
        padding:10,
        color: 'white',
        marginTop: -15
        
        },
       
})

function HeroSearch() {
    const classes = useStyles();
  return <div style={{width: '60vw', height: 200, backgroundColor: '#fff', padding: 30, }}> 
<Box sx={{display: 'flex', flexDirection: 'row' }}>
    <FormControl fullWidth>
    <InputLabel id="location-label"> <GoLocation/> All Locations</InputLabel>
    <Select
        labelId="location-label"
        id="location-select"
        // value={age}
        
        label="Location"
        // onChange={handleChange}
    >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    </FormControl>
    <FormControl fullWidth>
    <InputLabel id="animal-label">  <FaDog/>Animal</InputLabel>
    <Select
        labelId="animal-label"
        id="animal-select"
        // value={age}
        label="animal"
        // onChange={handleChange}
    >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    </FormControl>
    <FormControl fullWidth>
    <InputLabel id="breed-label"> <GiScales/> Breed</InputLabel>
    <Select
        labelId="breed-label"
        id="breed-select"
        // value={age}
        label="breed"
        // onChange={handleChange}
    >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    </FormControl>
    <Box className={classes.searchIcon} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <FaSearch/>
          </Box>
          
    </Box>
    <Typography>
              You may be looking for
    </Typography>
    <Button color='primary' variant="text" endIcon={<ImCancelCircle/>}>
        Dogs
    </Button>
    <Button color='primary' variant="text" endIcon={<ImCancelCircle/>}>
        Cats
    </Button>
  </div>;
}

export default HeroSearch;
