import { Typography } from '@material-ui/core'
import React from 'react';

const Profile = () => {
    return (
        <div>
          <br/>
       <Typography style={{textTransform:'uppercase',
       fontSize:'17px',
       fontWeight:'blod',
        color:'black',
        fontFamily:'fangsong'}}>
          Akil
          </Typography>
       <Typography style={{ fontSize:' 17px',
       color:'#777'}}>
          ThangaDuari
          </Typography>
       <img src="img/2.jpg" alt=" "
        style={{maxWidth:'100%',
        borderRadius:'140px 140px 140px 140px'
        ,backgroundColor:'yellow'}}/>           
       
           </div>
    )
}

export default Profile
