import React from 'react';
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
    return {
        root: {
            padding: 10,
           
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
              width: 52,
              height: 17,
            }
        },
    }
})

function CardSkeleton() {
    const classes = useStyles();
  return <div>
      <Grid container  spacing={3}> 
       <Grid item xs={12} sm={6} md={4}> 
       <Card className={classes.root}>
           <Skeleton variant='rectangular' width='100%' height={200}/>
           
           <Box sx={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}} >
                <Box sx={{display: 'flex', flexDirection:'column'}}>
                    <Skeleton variant='text'  width= {70}/>
                    <Skeleton variant='text'  width= {50}/>
                </Box>
                <Box>
                    <Skeleton variant='circular'  width= {30} height={30} style={{ borderRadius:'50%'}} /> 
                    
                </Box>
           </Box>
           <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
               <div> <Skeleton variant='circular' className={classes.responsiveBtn} style={{ borderRadius: 25}} /> </div>
                <Skeleton variant='text' width={90}/>
           </Box>
     </Card>
     </Grid> 

     <Grid item xs={12} sm={6} md={4}> 
       <Card className={classes.root}>
           <Skeleton variant='rectangular' width='100%' height={200}/>
           
           <Box sx={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}} >
                <Box sx={{display: 'flex', flexDirection:'column'}}>
                    <Skeleton variant='text'  width= {70}/>
                    <Skeleton variant='text'  width= {50}/>
                </Box>
                <Box>
                    <Skeleton variant='circular'  width= {30} height={30} style={{ borderRadius:'50%'}} /> 
                    
                </Box>
           </Box>
           <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
               <div> <Skeleton variant='circular' className={classes.responsiveBtn}  style={{ borderRadius:25}} /> </div>
                <Skeleton variant='text' width={90}/>
           </Box>
     </Card>
     </Grid>

     <Grid item xs={12} sm={6} md={4}> 
       <Card className={classes.root}>
           <Skeleton variant='rectangular' width='100%' height={200}/>
           
           <Box sx={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}} >
                <Box sx={{display: 'flex', flexDirection:'column'}}>
                    <Skeleton variant='text'  width= {70}/>
                    <Skeleton variant='text'  width= {50}/>
                </Box>
                <Box>
                    <Skeleton variant='circular'  width= {30} height={30} style={{ borderRadius:'50%'}} /> 
                    
                </Box>
           </Box>
           <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
               <div> <Skeleton variant='circular' className={classes.responsiveBtn} style={{ borderRadius: 25}} /> </div>
                <Skeleton variant='text' width={90}/>
           </Box>
     </Card>
     </Grid>

     <Grid item xs={12} sm={6} md={4}> 
       <Card className={classes.root}>
           <Skeleton variant='rectangular' width='100%' height={200}/>
           
           <Box sx={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}} >
                <Box sx={{display: 'flex', flexDirection:'column'}}>
                    <Skeleton variant='text'  width= {70}/>
                    <Skeleton variant='text'  width= {50}/>
                </Box>
                <Box>
                    <Skeleton variant='circular'  width= {30} height={30} style={{ borderRadius:'50%'}} /> 
                    
                </Box>
           </Box>
           <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
               <div> <Skeleton variant='circular' className={classes.responsiveBtn}  style={{ borderRadius: 25}} /> </div>
                <Skeleton variant='text' width={90}/>
           </Box>
     </Card>
     </Grid>
     </Grid>
  </div>;
}

export default CardSkeleton;
