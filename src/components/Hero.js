/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import HeroSearch from './HeroSearch';
import Cat from '../assets/Rectangle-257.png'
import Dog1 from '../assets/Rectangle-503.png'
import Dog2 from '../assets/Rectangle-504.png'
import Bird from '../assets/Rectangle-505.png'


const useStyles = makeStyles({
    root: {
        backgroundColor: '  rgba(13, 117, 255, 0.05)',
        height: '90vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexBasis: '33.33333%'

    },
    imgContainer: {
        display: 'flex',
        flexDirection: 'column',
        
    },
    imgCon1: {
        display: 'flex',
        flexDirection: 'row'
    },
    imgCon2: {
        display: 'flex',
        flexDirection: 'row'
    }
})

function Hero() {
const classes = useStyles()

  return <div className={classes.root}>
<div>
  
        <div>
            <Typography>
                FIND SPECIAL PETS
            </Typography>
            <Typography>
                Think you Love Pets?
            </Typography>
            <Typography>
                Adopt One
            </Typography>
            <Typography>
                Pet Adoption is quickly becoming the preferred way to find a new dog, puppy or kitten.
            </Typography>
        </div>

            <div>
                <HeroSearch/>
            </div>
                
  </div>
        <div className={classes.imgContainer}>

                <div className={classes.imgCon1}>
                    <div>
                        <img src={Cat}/>
                    </div>
                    <div>
                        <img src={Dog1}/>
                    </div>
                </div>
                <div className={classes.imgCon2}>
                
                    <div>
                        <img src={Dog2}/>
                    </div>
                    <div>
                        <img src={Bird}/>
                    </div>
                    
                </div>
        </div>
</div>;
}

export default Hero;
