import Typography from '@material-ui/core/Typography'
import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (
        <div style={{backgroundColor:'black'}}>
           <Typography align="left" style={{color:'white'}}>Contact as</Typography>
           <Typography style={{color:'white'}}><MailOutlineIcon/>akilakil3108@gmail.com</Typography>
           <Typography style={{color:'white'}}><WhatsAppIcon/>9344710612</Typography>
           <Typography style={{color:'white'}}><GitHubIcon/>https://github.com/Akil31</Typography>
           <Typography style={{color:'white'}}>< LinkedInIcon/>linkedin.com/in/akil-thanga-durai-b67069223</Typography>
        </div>
    )
}

export default Footer
