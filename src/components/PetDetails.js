/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
//import {Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core/';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import Dog from '../assets/Dog.png'
import Cat from '../assets/Cat.png'
import Bird from '../assets/Bird.png'
import Rabbit from '../assets/Rabbit.png'
import Reptile from '../assets/Reptile.png'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { GoLocation } from 'react-icons/go';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';




const useStyles = makeStyles({
        wrapper: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        root: {
          borderRadius: 10,
          padding: '4.5rem',
          backgroundColor: '#f8fafd',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
         
        },
        cardBorder: {
            borderRadius: 10,
            padding: '1.5rem',
           
        },
        imgTop: {
          width: 850,
          height: 300,
          borderRadius: 10,
         
          
        },
        imgBottom: { 
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          
          height: 200,
          
        },
        imgGrid: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, 210px)',
          gridGap: 10,
          justifyContent: 'center',
          marginBottom: 20
          
        },
        description: {
          padding: 20,
          marginTop: 50
        },
        modalStyle: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'calc(100%-200px)',
          height: 280,
          backgroundColor: '#fff',
          boxShadow: 24,
          padding: 30,
          borderRadius: 10,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',

          
        },
        btn: {
          borderRadius: 50,
          padding: 20,
          fontSize:13,
          height: 20,
          width: 150, 
          marginTop: 20,
         
        },
        modalBtn: {
            borderRadius: 10,
            padding: 20,
            fontSize:13,
            height: 10,
            width: 150,
            margin: 10,
          },
           
})

function PetDetails() {
const classes = useStyles()

// For API consumption
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
      
      getPetDetails()
      }, [id])

   // For the modal
const [open, setOpen] = useState(false);
 const handleOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);  
    }
  return (
    <>
    {loading ? <h4>Loading</h4> : 
   
      <div className={classes.wrapper} >
        {pets && pets.map((pet, key) => {
          return (
            <>
            <div style={{marginBottom: 20, marginLeft: 200, marginRight: 200}}>
            <Box sx={{display:'flex'}} key={key}>
              <Box sx={{display:'flex'}}>
                <Avatar style={{marginRight: 10, width: 56, height: 56, fontSize: 20}}>{pet.name.charAt(0)}</Avatar>

                <Box  sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography component="div" variant="h5">
                     {pet.name}
                     </Typography>
                    <Typography variant="subtitle1" component="div">
                      {pet.breed}
                     </Typography>
                                        
                </Box>
              </Box>
                 <Box sx={{flexGrow:1}}/>
                 <Box>
                    <img alt='pet-avatar' src={pet.animal ==='dog' ? Dog : pet.animal ==='cat' ? Cat : pet.animal ==='bird' ? Bird : pet.animal ==='rabbit' ? Rabbit : pet.animal ==='reptile' ? Reptile : null}/>
                 </Box>
            </Box>
            </div>

            <div >
          <Container maxWidth='md' className={classes.root} >
            <Typography style={{display: 'flex', alignSelf: 'flex-start'}} variant='h4'>{pet.name} Pictures</Typography>
     
            <Card className={classes.imgTop} elevation={0} >
                    
                <CardMedia
                    component="img"
                    height="auto"
                    width='100%'
                    style={{position: 'relative', marginTop: -100}}
                    image={pet.images[0]}
                    alt='pet'
                    
                    
                 /> </Card>
            
                 
                <Box>
                 <Grid container className={classes.imgBottom} spacing={3}>
                   
                    <Grid item style={{height: 100, width: 210}} >
                      <Card elevation={0} style={{borderRadius: 10}} >
                        <CardMedia
                        component="img"
                        height="auto"
                        width='100%'
                       
                        image={pet.images[1]}
                        alt='pet'
                        /> </Card>
                    </Grid>
                    <Grid item style={{height: 100, width: 210}} >
                      <Card elevation={0} style={{borderRadius: 10}} >
                        <CardMedia
                        component="img"
                        height="auto"
                        width='100%'
                       
                        image={pet.images[2]}
                        alt='pet'
                        /> </Card>
                    </Grid>
                    <Grid item style={{height: 100, width: 210}} >
                      <Card elevation={0} style={{borderRadius: 10}} >
                        <CardMedia
                        component="img"
                        height="auto"
                        width='100%'
                       
                        image={pet.images[3]}
                        alt='pet'
                        /> </Card>
                    </Grid>
                    <Grid item style={{height: 100, width: 210}} >
                      <Card elevation={0} style={{borderRadius: 10}} >
                        <CardMedia
                        component="img"
                        height="auto"
                        width='100%'
                       
                        image={pet.images[4]}
                        alt='pet'
                        /> </Card>
                    </Grid>
                   
                 </Grid>
                 </Box>

                 

                 <Card className={classes.description}>
                    <CardContent>
                      <Typography variant='h4'> Description</Typography>
                       <Typography>
                          {pet.description}
                       </Typography>
                    </CardContent>
                    <CardActions>
                    <Button style={{backgroundColor: '  rgba(13, 117, 255, 0.05)', marginRight: 10}} color='primary' variant="text" startIcon={<GoLocation/>}>
                        {pet.city}, {pet.state}
                    </Button>
                    </CardActions>
                 </Card>
                 
                 <div style={{display: 'flex', alignSelf: 'flex-start'}}>

                  <Button 
                  className={classes.btn}
                  color='primary'
                  variant="contained"
                  onClick={handleOpen}> Adopt {pet.name}</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="pet-details-modal"
                    aria-describedby="pet-details-modal-dscription"
                  >
                    <Box className={classes.modalStyle}>
                      <Typography variant='h4'>Are you sure you want to adopt <Box component='span' sx={{color: '#D21A30'}}>{pet.name}</Box>?</Typography>
                      
                      <Box>
                      <Button 
                        className={classes.modalBtn}
                        color='primary'
                        variant="contained"
                        onClick={handleClose}
                        >Adopt {pet.name}</Button>

                        <Button 
                        className={classes.modalBtn}
                        style={{backgroundColor: '  rgba(13, 117, 255, 0.05)'}}
                        variant= 'text'
                        disableElevation
                        onClick={handleClose}
                        >Cancel</Button>
                      </Box>
                    </Box>
                  </Modal>
                </div>
            </Container> </div>
              </> )
        })}

      </div>}
    </>
  )
}

export default PetDetails;


