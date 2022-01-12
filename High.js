import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { FaSchool } from "react-icons/fa";
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
     ch: {
      display: 'flex',
      flexWrap: 'wrap',
      height:'auto',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(100),
        height: theme.spacing(30),
      },
    },
}));

export default function SimplePaper() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>     
     
<div className={classes.ch}>
      <Paper elevation={3} >
        <h3 style={{textAlign:'center',color:'#e91e63'}}>10th</h3>

       < FaSchool size={'50px'} style={{color:'#2196f3' }}/>
       <h4 style={{textAlign:'center' ,color:'#0d47a1',font:'blod',}}>Hindu High School,</h4>
      <h6  style={{textAlign:'center' ,color:'#0d47a1',margin:'-20px'}}>Muthukrishnaperi-627861.</h6>
      <br/>
      <br/>
      
      <Button variant="contained" color="secondary"
       style={{textAlign:'center' ,color:'white',margin:'-20px'}} 
       onClick={handleClickOpen}>View</Button>
      </Paper>

      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" align="center">High School</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

           <h4> Class:-</h4><Typography>S.S.L.C</Typography>
           <h4> School Name:-</h4><Typography>Hindu High School</Typography>
           <h4> Year of Passing:-</h4><Typography>2015</Typography>
           <h4> % of Mark:-</h4><Typography>82.5%</Typography>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{marginRight:'40px'}} onClick={handleClose} color="primary" variant="contained">
            Cancal 
          </Button>
                 </DialogActions>
      </Dialog>
      
    </div>
    
      
      
    </div>
  );
}
