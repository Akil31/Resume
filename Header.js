import Paper from '@material-ui/core/Paper';
import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Tooltip from '@material-ui/core/Tooltip';

const Header = () => {
    return (
        <div>
            <Paper elevation={3}>
                <nav style={{listStyle:'none',display:'flex'}}>
                   
             
                
                <Tooltip title="9344710612" arrow>
                <WhatsAppIcon style={{color:'green',padding:'1px 15px'}}/>
                </Tooltip>
                 
                <Tooltip title="re-lover-47" arrow>
                <InstagramIcon style={{color:'#ff4081',padding:'1px 15px'}}/>
                </Tooltip>

                <Tooltip title="Akil" arrow>
               <FacebookIcon  style={{color:'blue',padding:'1px 15px'}}/>
               </Tooltip>

               <Tooltip title="https://github.com/Akil31" arrow>
               <GitHubIcon  style={{color:'blue',padding:'1px 15px'}}/>
               </Tooltip>

               <Tooltip title=" linkedin.com/in/akil-thanga-durai-b67069223" arrow>
               <LinkedInIcon style={{padding:'1px 15px'}} />
               </Tooltip>
          

               <Tooltip title="akilakil3108@gmail.com" arrow>
                <EmailIcon style={{color:'red',padding:'1px 15px'}}/>
               </Tooltip>
                </nav>

               
            </Paper>


        </div>
    )
}

export default Header
 