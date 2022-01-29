import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { FiSun } from 'react-icons/fi';
import { IoIosMoon } from 'react-icons/io';

function ThemeButton() {
  return <div>
    <ButtonGroup variant="outlined" aria-label="outlined button group" style={{marginTop: 15}} >
        <Button>  
            <FiSun/>
         </Button>
        <Button>
            <IoIosMoon/>
        </Button>
        
    </ButtonGroup>
  </div>;
}

export default ThemeButton;
