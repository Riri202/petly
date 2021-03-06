/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect} from 'react';
import Dog from '../assets/Dog.png'
import Cat from '../assets/Cat.png'
import Bird from '../assets/Bird.png'
import Rabbit from '../assets/Rabbit.png'
import Reptile from '../assets/Reptile.png'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import CardItem from './CardItem';
import CardSkeleton from './CardSkeleton';
import { getLinkForProxy } from '../utils/proxy';


const useStyles = makeStyles( theme => {
    return {
        root: {
            height: 100,
            backgroundColor: '  rgba(13, 117, 255, 0.05)',
            width: 100,
            marginRight: 15,
            marginTop: 10,
            [theme.breakpoints.down('xs')]: {
                display: 'flex',
                width: '100%',
                flexGrow: 1,
                height: 50,
            }
    
        },
        btnInnerWrapper: {
            display:'flex',
            flexDirection: 'column',
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'row',
                
            }
        },
        btnText: {
            [theme.breakpoints.down('xs')]: {
               marginLeft: 10,
            }
        },
        container: {
            paddingTop: 80,
            paddingLeft: 15,
            paddingRight: 15,
            marginBottom: 60,
        },
        btnWrapper: {
            marginBottom: 8,
            [theme.breakpoints.down('xs')]: {
                display: 'flex',
                flexDirection: 'column',
            }
        }
    }
})


function PetSearch() {
    // for styling
    const classes = useStyles();

    //  initial pet
    const [presentAnimal, setPresentAnimal] = useState('dog');

    // initial pet data
    const [presentTab, setPresentTab] = useState('dog')

    // to display other pet types
    const [filteredAnimal, setFilteredAnimal] = useState([]);
    const [loading, setLoading] =useState(false)

    

    // consuming pet api
    const filterAnimalRequest = async () => {
        setLoading(true);
        try{
            const res = await fetch (`https://pets-v2.dev-apis.com/pets?animal=${presentAnimal}`);
            const data = await res.json();
            setFilteredAnimal(data.pets);
            setLoading(false)
         } catch(error){
             alert(error.message)
         }
    }
useEffect(()=>{
    filterAnimalRequest()
}, [presentAnimal])

//Handlers for each animal
const handleCat = () =>{
    setPresentAnimal('cat');
    setPresentTab('cat')
}
const handleDog = () =>{
    setPresentAnimal('dog');
    setPresentTab('dog')
}
const handleBird = () =>{
    setPresentAnimal('bird');
    setPresentTab('bird')
}
const handleRabbit = () =>{
    setPresentAnimal('rabbit');
    setPresentTab('rabbit')
}
const handleReptile = () =>{
    setPresentAnimal('reptile');
    setPresentTab('reptile')
}


  return  <div className={classes.container}>
  <Typography variant='h4'>Browse Through Pet Types</Typography>
  <Box className={classes.btnWrapper}>
        <Button onClick={handleDog} className={classes.root} color='primary' variant={presentTab === 'dog' ? 'outlined' : 'text'} size='large'>
        <Box className={classes.btnInnerWrapper}> 
            <img alt= 'Dog' src={Dog}/>
            <Typography className={classes.btnText}>Dog</Typography>
        </Box>
        </Button>

        <Button onClick={handleCat}  className={classes.root} color='primary' variant={presentTab === 'cat' ? 'outlined' : 'text'}  size='large'>
        <Box className={classes.btnInnerWrapper}> 
            <img alt='Cat' src={Cat}/>
            <Typography className={classes.btnText}>Cat</Typography>
        </Box>
        </Button>

        <Button onClick={handleBird}  className={classes.root} color='primary' variant={presentTab === 'bird' ? 'outlined' : 'text'}  size='large'>
        <Box className={classes.btnInnerWrapper}> 
            <img alt='Bird' src={Bird}/>
            <Typography className={classes.btnText}>Bird</Typography>
        </Box>
        </Button>

        <Button onClick={handleRabbit}  className={classes.root} color='primary' variant={presentTab === 'rabbit' ? 'outlined' : 'text'}  size='large'>
        <Box className={classes.btnInnerWrapper}> 
            <img alt='Rabbit' src={Rabbit}/>
            <Typography className={classes.btnText}>Rabbit</Typography>
        </Box>
        </Button>

        <Button onClick={handleReptile}  className={classes.root} color='primary' variant={presentTab === 'reptile' ? 'outlined' : 'text'}  size='large'>
        <Box className={classes.btnInnerWrapper}> 
            <img alt='Reptile' src={Reptile}/>
            <Typography className={classes.btnText}>Reptile</Typography>
        </Box>
        </Button>
</Box>
 <Box sx={{mb: 3}}><Typography variant = 'h4' >{presentAnimal}s</Typography> </Box>
 {loading ? <CardSkeleton/> : <> <Grid container spacing={5}> {filteredAnimal && filteredAnimal.map((animals, key) => {
                    const {id, animal,images, name, breed, city, state } = animals;
                    return ( 
                        
                        <Grid item xs={12} sm={6} md={4} key={key}>
                           <CardItem 
                        src={getLinkForProxy(images[0])}
                        text={name}
                        breed={breed}
                        city={city}
                        state={state}
                        petID={id}
                        src2={animal ==='dog' ? Dog : animal ==='cat' ? Cat : animal ==='bird' ? Bird : animal ==='rabbit' ? Rabbit : animal ==='reptile' ? Reptile : null } />
                        </Grid>
                        );
                })}
                </Grid> </> }

</div>;
}

export default PetSearch;
