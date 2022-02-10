/* eslint-disable no-unused-vars */
import React  from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { FiSun } from 'react-icons/fi';
import { IoIosMoon } from 'react-icons/io';




function ThemeButton({toggleLight, toggleDark }) {
  
  return <div>
 

    <ButtonGroup color = 'primary' variant="outlined" aria-label="outlined button group" style={{marginTop:8, paddingRight: 50, height: 30}} >

   

       
        <Button onClick={toggleLight} style={{padding:20}}>  

            <FiSun/>
         </Button>
        <Button onClick={toggleDark}  style={{padding:20}}>
            <IoIosMoon/>
        </Button>
     
    </ButtonGroup>
  </div>
}

export default ThemeButton;