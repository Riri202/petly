/* eslint-disable react/prop-types */

import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';






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
        
       
    },
    media: {
        height:200
    },
    cardInfo:{
        justifyContent: 'space-between'
    }
})

function CardItem({ src, src2, text, breed, state, city }) {
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
                                <Box className='card-info-right'>
                                    <img alt='pet-avatar' src={src2}/>
                                </Box>
                        </Box>
                    <Box  sx={{ display: 'flex' }} className={classes.cardInfo} >
                        <Button 
                        className={classes.btn}
                        color='primary'
                        variant="contained">View Details</Button>
                        <Typography>
                            {city}, {state}
                        </Typography>
                                
                     </Box >
                        </CardContent>
                </Card>

           
    
  
}

export default CardItem;
