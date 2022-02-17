import React from 'react'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import {Skeleton} from '@material-ui/lab'
import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => {
    return {
        wrapper: {
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            width:'70vw'
          },
          responsiveBtn: {
              width: 100,
              height: 40,
            [theme.breakpoints.down('md')]: {
                width: 80,
                height: 30, 
    
              },
              [theme.breakpoints.down('sm')]: {
                width: 60,
                height: 20,
              },
              [theme.breakpoints.down('xs')]: {
                width: 50,
                height: 15,
              }
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
    }
})

function PetDetailsSkeleton({theme, darkMode}) {
const classes = useStyles(); 

  return (
  
    <div >
        <Box className={classes.avatarContainer}  sx={{display: 'flex'}}>
            <Skeleton  variant="circular" width={40} height={40} style={{marginRight: 8, borderRadius:'50%'}} />
            <Box  sx={{display: 'flex', flexDirection:'column'}}>
                <Skeleton variant='text'  width= {80}/>
                <Skeleton variant='text'  width= {50}/>
            </Box>
            <Box sx={{flexGrow: 1}}/>
            <Skeleton variant="circular" width={40} height={40} style={{ borderRadius:'50%'}} />
        </Box>

       
        <Box className={classes.wrapper} style={{backgroundColor: darkMode ?  theme.palette.background.default : '#F3F5FB'}}>
            <div style={{display:'flex', alignSelf: 'flex-start', marginBottom: 10}}>
            <Skeleton variant='circular' width= {100} height={20} style={{ borderRadius: 25}}/>
            </div>
            <Skeleton variant='rectangular' width='70vw' height={247} style={{borderRadius: 5, marginBottom: 10 }} />

            <Box sx={{display: 'flex', alignSelf: 'flex-start', mb:2}} style={{width: '70vw', overflowX:'scroll'}} >
            <Skeleton variant='rectangular' width={158} height={97} style={{borderRadius: 5, margin: 5}} />
            <Skeleton variant='rectangular' width={158} height={97} style={{borderRadius: 5, margin: 5}} />
            <Skeleton variant='rectangular' width={158} height={97} style={{borderRadius: 5, margin: 5}} />
        
            </Box>
            
            <Card style={{width: '70vw', padding: 10}} >
             <Skeleton variant='circular' width= '20%' height={20} style={{ borderRadius: 25, marginBottom: 10}}/>
             <Skeleton variant='text'  width= '90%'/>
             <Skeleton variant='text'  width= '80%'/>
             <Skeleton variant='text'  width= '70%'/>
             <Skeleton variant='text' width={100} height={30} />             
            </Card>
            <div style={{display:'flex', alignSelf: 'flex-start', marginTop: 10}}> <Skeleton variant='circular' className={classes.responsiveBtn}  style={{ borderRadius: 25}} /> </div>
            
                
        </Box>
        

    </div>
  )
}

export default PetDetailsSkeleton