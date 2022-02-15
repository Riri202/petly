
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import HeroSearch from './HeroSearch';
import Cat from '../assets/Rectangle-257.png'
import Dog1 from '../assets/Rectangle-503.png'
import Dog2 from '../assets/Rectangle-504.png'
import Bird from '../assets/Rectangle-505.png'
//import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => {
    return {
        root: {
            backgroundColor: '  rgba(13, 117, 255, 0.05)',
            padding: 50,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexBasis: '33.33333%',
            [theme.breakpoints.down('md')]: {
                justifyContent: 'center',
            }
    
        },
        heroText: {
            margin: 'auto',
            paddingBottom: 50
        },
        heroSearch: {
            margin: 'auto'
        },
        imgContainer: {
            display: 'flex',
            flexDirection: 'column',
            
            // paddingLeft: 80
            
            
        },
        imgCon1: {
            display: 'flex',
            flexDirection: 'row'
        },
        imgCon2: {
            display: 'flex',
            flexDirection: 'row'
        }
    }
})

function Hero( {theme, darkMode} ) {
const classes = useStyles()

  return <div className={classes.root}>
<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
  
        <div className={classes.heroText}>
            <Typography style={{color: '#0D75FF'}} variant='body1' >
                FIND SPECIAL PETS
            </Typography>
            <Typography variant='h3' style={{color: '#344062'}}>
                Think you Love Pets?
            </Typography>
            <Typography variant='h3' style={{color: '#D21A30'}}>
                Adopt One
            </Typography>
            <Typography style={{fontWeight: 'light'}} variant='body1' >
                Pet Adoption is quickly becoming the preferred way to find a new dog, puppy, cat <br></br> or kitten.
            </Typography>
        </div>

            <div className={classes.heroSearch}>
                <HeroSearch  theme={theme} darkMode={darkMode}/>
            </div>
                
  </div>
        <div className={classes.imgContainer}>

                <div className={classes.imgCon1}>
                    <div>
                        <img alt='cat' src={Cat}/>
                    </div>
                    <div>
                        <img  alt='dog'src={Dog1}/>
                    </div>
                </div>
                <div className={classes.imgCon2}>
                
                    <div>
                        <img alt='dog2' src={Dog2}/>
                    </div>
                    <div>
                        <img alt='bird' src={Bird}/>
                    </div>
                    
                </div>
        </div>
</div>;
}

export default Hero;
