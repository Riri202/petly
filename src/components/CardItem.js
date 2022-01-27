/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import './CardItem.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core'
import { hover } from '@testing-library/user-event/dist/hover';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
// import { CardActionArea } from '@mui/material';




const useStyles = makeStyles({
    btn: {
        backgroundColor: '#0D75FF',
        borderRadius: 50,
        fontColor: 'white',
        padding: 20,
        fontSize:13,
        height: 10,
    },
    root:{
        maxWidth:355,
        spacing: 20
       
    },
    media: {
        height:200
    },
    cardInfo:{
        justifyContent: 'space-between'
    }
})

function CardItem({ src, text, breed, state, city }) {
const classes = useStyles()

  return <Card className={classes.root} >
                    
                <CardMedia
                    component="img"
                    height="194"
                    image={src}
                    alt={breed}
                    className={classes.media}
                 />
                       <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box  sx={{ display: 'flex' }} className={classes.cardInfo} > 
                            <Box  sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography component="div" variant="h5">
                                {text}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                {breed}
                                </Typography>
                                    
                            </Box >
                                <div className='card-info-right'>
                                    <p>Animal pic</p>
                                </div>
                        </Box>
                    <Box  sx={{ display: 'flex' }} className={classes.cardInfo} >
                        <Button 
                        className={classes.btn}
                        variant="contained">View Details</Button>
                        <Typography>
                            {city}, {state}
                        </Typography>
                                
                     </Box >
                        </CardContent>
                </Card>

           
    
  
}

export default CardItem;
