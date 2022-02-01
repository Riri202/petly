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
        padding:5,
        color: 'white',
        marginTop: -8
        
        },
       
})

function HeroSearch() {
    const classes = useStyles();
  return <div style={{width: '50vw', height: 150, backgroundColor: '#fff', padding: 30, marginLeft: 50}}> 
<Box sx={{padding: 2, borderRadius:50, display: 'flex', flexDirection: 'row', backgroundColor: '  rgba(13, 117, 255, 0.05)'}}>
    <FormControl fullWidth>
    <InputLabel style={{marginLeft: 25}} id="location-label"> <GoLocation style={{marginRight: 7}} /> All Locations</InputLabel>
    <Select
        disableUnderline
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
    <InputLabel style={{marginLeft: 25}} id="animal-label">  <FaDog style={{marginRight: 7}} />Animal</InputLabel>
    <Select
        disableUnderline
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
    <InputLabel style={{marginLeft: 25}} id="breed-label"> <GiScales style={{marginRight: 7}}/> All Breeds</InputLabel>
    <Select
        disableUnderline
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
