import React from 'react'
import { Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';
import CakeIcon from '@material-ui/icons/Cake';

const ContainerTimeline = () => {
    return (
        <div style={{color:'black'}}>
            
         <EmailIcon style={{color:'#039be5'}}/>
        <Typography >Email Id
         </Typography>
          <Typography>
              akilakil3108@gmail.com</Typography>
       

     <CallIcon style={{color:'#039be5'}}/><Typography>Contact</Typography>
          <Typography>9344710612,<br/>7708850166.</Typography>
       
     <HomeIcon style={{color:'#039be5'}}/>
     <Typography>Address</Typography>
         <Typography>3/205,Amman Kovil st,
          Muthukrishnaperi,<br/>
          Tenkasi - 627 809.
          </Typography>
       

     <CakeIcon style={{color:'#039be5'}}/>
     <Typography>Birthday</Typography>
          <Typography>2000 August 31.</Typography>
      
        </div>
    )
}

export default ContainerTimeline;
