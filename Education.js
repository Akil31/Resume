import React from 'react';
import {Grid} from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMaterialui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiHtml5 } from "react-icons/si";
import Button from '@material-ui/core/Button';


import Box from '@material-ui/core/Box';

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  style: { width: '56rem', height: '0.1rem' },
  borderColor: 'text.primary',
};

export const Education = () => {
    return (
        <Grid>
          <h3 align="left"style={{margin:'20px'}}><br/>Languages:-</h3>
          <Box borderBottom={1} {...defaultProps}style={{maxWidth: 680,
    }}></Box> 
        <Chip
        style={{margin:'20px'}}
        icon={<SiHtml5 size="30px" />}
        label="HTML"
        color="secondary"
             />
       <Chip style={{margin:'20px'}}
        icon={<SiCss3 size="30px" color="#0277bd" />}
        label="CSS"
        color="secondary"
             />
       <Chip style={{margin:'20px'}}
        icon={<FaReact size="30px" color="#0091ea" />}
        label="React"
        color="secondary"
             />

        <Chip style={{margin:'20px'}}
        icon={<SiMaterialui size="30px" color="#2962ff"/>}
        label="Material-ui"
        color="secondary"
             />

         <Chip style={{margin:'20px'}}
        icon={<IoLogoJavascript size="30px" color="#ffff00" />} 
        label="JavaScript"
        color="secondary"
             />
              
            <h3 align="left" style={{margin:'20px'}}>Experience:-</h3>  
            <Box borderBottom={1} {...defaultProps}style={{maxWidth: 680,
    }}></Box> 
    <Button  variant="contained" color="primary"  style={{margin:'20px'}}>6 Month</Button>
       
       
      </Grid>
     
                
    )
}
