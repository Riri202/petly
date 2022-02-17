/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Typography } from '@material-ui/core';
import { Box } from '@material-ui/core/';
import footerImg1 from '../assets/Group 115.png'
import footerImg2 from '../assets/Group 117.png'
import footerImg3 from '../assets/Group 116.png'
import footerImg4 from '../assets/Group 193.png'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import Logo from '../assets/Logo.png';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const useStyles = makeStyles(theme =>{
   return {
    btn: {
        backgroundColor: '#0D75FF',
        borderRadius: 50,
        fontColor: 'white',
        padding: 20,
        fontSize:13,
        height: 50,
        width: 150,
        padding: 5,
        
        [theme.breakpoints.down('xs')]: {
            padding: 10,
            fontSize: 6,
            height: 25,
            width: 80,
            marginBottom: 15
           
        }
    },
    root: {
   
        height: 500,
        marginTop: 30,
        [theme.breakpoints.down('sm')]: {
            height: 320
        }
    },
    logo: {
        
        width: 50,
        height: 50,
        borderRadius:50,
        [theme.breakpoints.down('sm')]: {
            width: 30,
            height: 30,
            marginBottom: 10
        }
        },
        logoImg: {
            [theme.breakpoints.down('sm')]: {
                width: 13,
                height: 13,
            }
        },
        logoTitle: {
            marginTop: 12, 
            marginLeft: 8,
            [theme.breakpoints.down('sm')]: {
                marginTop: -0
            }
        },
        removeImg: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        responsiveFooterContent: {
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'space-around',
                marginLeft: 10
                
            }
        },
        responsiveFooter: {
            
            [theme.breakpoints.down('sm')]: {
                margin: 0,
                justifyContent: 'start'

                
            }
        },
        footerIconContainer: {
            [theme.breakpoints.down('sm')]: {
                justifyContent: 'start',
                marginBottom: 10,
                marginLeft:0
                
            }
        },
        footerIcon: {
            [theme.breakpoints.down('sm')]: {
                marginRight: 6,
                width: 13,
                height: 13,
                }
        },
        footerBoldText: {
            [theme.breakpoints.down('sm')]: {
                marginTop: 40
        }  },   
   }
})


function Footer({darkMode, theme}) {
    const classes = useStyles();
  return <div>
      <Box className={classes.root} style={{ backgroundColor: darkMode ?  theme.palette.background.default : '#F3F5FB'}} sx={{display:'flex', flexDirection:'column'}}>
           
                <Box className={classes.removeImg} sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <div>
                        <img alt='footerImg1' src={footerImg1} />
                    </div>

                    <div>
                    <img alt='footerImg2' src={footerImg2} />
                    </div>
                </Box>

                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                    <div className={classes.removeImg} >
                        <img alt='footerImg3' src={footerImg3} />
                    </div>
                    <Box className={classes.footerBoldText} sx={{display:'flex', flexDirection:'column'}}>
                        <Typography variant='h3'>
                            <Box component='span' sx={{color: '#0D75ff'}}>Need</Box> help with <br></br> Adopting a pet?
                        </Typography>
                        <Box> 
                            <Button style={{ marginTop: 10}} color='primary' className={classes.btn} variant="contained">
                                View all Pets
                            </Button>
                        </Box>
                    </Box>

                    <div className={classes.removeImg} >
                        <img alt='footerImg4' src={footerImg4} />
                    </div>
                </Box>

                <Box className={classes.responsiveFooterContent} sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>  
                        <Box className={classes.logo} style={{ backgroundColor: darkMode ? '#D21A30' :  '#0D75FF'}} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <img alt='petly-logo' src={Logo} className={classes.logoImg}/>
                        </Box>
                        
                        <Typography className={classes.logoTitle} variant="h6" component="div" sx={{ flexGrow: 1 }} style={{}}>
                            Petly
                        </Typography>
                    </Box>
                    <Box className={classes.responsiveFooter}   sx={{display:'flex', flexDirection:'column', ml:40}}>
                        <Box  className={classes.footerIconContainer} sx={{display: 'flex', justifyContent: 'space-evenly', mb: 3}}>
                            <FaFacebook size={20} style={{color: '#666879'}} className={classes.footerIcon}/> <FaInstagram size={20} style={{color: '#666879'}} className={classes.footerIcon}/> <FaTwitter size={20} style={{color: '#666879'}} className={classes.footerIcon}/> <FaLinkedin size={20} style={{color: '#666879'}} className={classes.footerIcon}/>
                        </Box>
                        <Typography>
                            Copyright © 2021 Petly. All rights reserved.
                        </Typography>
                    </Box>
                    <Box className={classes.responsiveFooter} sx={{display: 'flex', flexDirection: 'row', ml: 20}}>
                        <Typography className={classes.responsiveFooter} style={{margin: 10}}>Terms of use</Typography>
                        <Typography className={classes.responsiveFooter} style={{margin: 10}}>Privacy policy</Typography>
                    </Box>
                </Box>
           
      </Box>
  </div>;
}

export default Footer;
