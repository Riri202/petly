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




const useStyles = makeStyles( theme => {
        return {
          wrapper: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
          root: {
            borderRadius: 10,
            padding: 15,
            backgroundColor: '#f8fafd',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '70vw'
           
          },
          avatarContainer: {
            marginBottom: 20, 
            marginLeft: 200, 
            marginRight: 200,
            [theme.breakpoints.down('md')]: {
              marginLeft: 150, 
              marginRight: 150,
            },
            [theme.breakpoints.down('sm')]: {
              marginLeft: 100, 
              marginRight: 100,
            },
            [theme.breakpoints.down('xs')]: {
              marginLeft: 50, 
              marginRight: 50,
            }
          },
          avatar: {
            marginRight: 10, 
            width: 56, 
            height: 56, 
            fontSize: 20,
            [theme.breakpoints.down('md')]: {
              width: 46, 
              height: 46, 
            },
            [theme.breakpoints.down('xs')]: {
              width: 36, 
              height: 36, 
            }
          },
          cardBorder: {
              borderRadius: 10,
              padding: '1.5rem',
             
          },
          imgTop: {
            width: '60vw',
            marginBottom: 20,
            marginTop: 20
           
            
          },
          imgCarousel: { 
            display: 'flex',
            width: '70vw',
            justifyContent: 'space-evenly',
            overflowX: 'scroll',
           
          },
          imgCarouselItem: {
            width: 158,
            height: 97,
            borderRadius: 5,
            margin: 5,
          },
        
          description: {
            padding: 10,
            marginTop: 20
          
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
            [theme.breakpoints.down('sm')]: {
              height: 230,
              padding: 25,
            },
            [theme.breakpoints.down('xs')]: {
              height: 200,
              padding: 20,
            }
            
          },
          btn: {
            borderRadius: 50,
            padding: 20,
            fontSize:13,
            height: 20,
            marginTop: 20,
            [theme.breakpoints.down('md')]: {
              
              padding: 17
          },
          [theme.breakpoints.down('sm')]: {
              fontSize: 8,
              padding: 15,
             
          },
          [theme.breakpoints.down('xs')]: {
              fontSize: 7,
              padding: 10,
             
            }
           
          },
          textBtn : {
            padding: 13,
           [theme.breakpoints.down('sm')]: {
               fontSize: 8,
               padding: 10,
               
           },
           [theme.breakpoints.down('xs')]: {
               fontSize: 7,
               padding: 8,
               
             }
          },
          responsiveLocationIcon: {
            [theme.breakpoints.down('sm')]: {
                width: 15,
                height: 15
            },
            [theme.breakpoints.down('xs')]: {
              width: 12,
              height: 12
          }
        },
          modalBtn: {
              borderRadius: 10,
              padding: 20,
              fontSize:13,
              height: 10,
              width: 150,
              margin: 10,
              [theme.breakpoints.down('md')]: {
               width: 130,
                padding: 17
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 8,
                padding: 15,
                width: 100,
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: 6,
                padding: 10,
                width: 80,
              }
            },
        }
           
})

function PetDetails( {theme, darkMode} ) {
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
            <div className={classes.avatarContainer} >
            <Box sx={{display:'flex'}} key={key}>
              <Box sx={{display:'flex'}}>
                <Avatar className={classes.avatar} >{pet.name.charAt(0)}</Avatar>

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
          <Container  className={classes.root} style={{backgroundColor: darkMode ?  theme.palette.background.default : '#F3F5FB'}} >
            <Typography style={{display: 'flex', alignSelf: 'flex-start'}} variant='h4'>{pet.name} Pictures</Typography>
     
              <div className={classes.imgTop}>
                 <img src={pet.images[0]} alt='pet' style={{height: 247, width: '100%', borderRadius: 5, objectFit: 'cover'}} />
              </div>   
            
              <div className={classes.imgCarousel} >
                {pet.images.map((photo, key) => {
                  return (
                      <img src={photo} key={key} alt='pet' className={classes.imgCarouselItem} />
                  )
                })}
              </div>  

                 <Card className={classes.description}>
                    <CardContent>
                      <Typography variant='h4'> Description</Typography>
                       <Typography>
                          {pet.description}
                       </Typography>
                    </CardContent>
                    <CardActions>
                    <Button className={classes.textBtn} style={{backgroundColor: '  rgba(13, 117, 255, 0.05)', marginRight: 10}} color='primary' variant="text" startIcon={<GoLocation className={classes.responsiveLocationIcon}/>}>
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
                    <Box className={classes.modalStyle} style={{backgroundColor: darkMode ?  theme.palette.background.default : '#F3F5FB'}}>
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


