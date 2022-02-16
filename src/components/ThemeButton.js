/* eslint-disable no-unused-vars */
import React  from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { FiSun } from 'react-icons/fi';
import { IoIosMoon } from 'react-icons/io';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    btnGroup: {
      marginTop:5, 
      paddingRight: 50, 
      height: 30,
      [theme.breakpoints.down('sm')]: {
       marginTop: 3, 
      },
      [theme.breakpoints.down('xs')]: {
       paddingRight: 30
       },
    },
    btn: {
      padding: 20,
      [theme.breakpoints.down('sm')]: {
        padding: 15
      },
      [theme.breakpoints.down('xs')]: {
        padding: 10
      }
    },
    btnIcon: {
      [theme.breakpoints.down('sm')]: {
        height: 12,
        width: 12
      },
      [theme.breakpoints.down('xs')]: {
        height: 10,
        width: 10
      }
    }
  }
})


function ThemeButton({toggleLight, toggleDark }) {
  const classes = useStyles();
  return <div>
 

    <ButtonGroup color = 'primary' variant="outlined" aria-label="outlined button group" className={classes.btnGroup} >

   

       
        <Button onClick={toggleLight} className={classes.btn} >  

            <FiSun className={classes.btnIcon}/>
         </Button>
        <Button onClick={toggleDark}   className={classes.btn}>
            <IoIosMoon className={classes.btnIcon}/>
        </Button>
     
    </ButtonGroup>
  </div>
}

export default ThemeButton;