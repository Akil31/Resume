import React from 'react';
import Header from './Header/Header';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';  
import Container from '@material-ui/core/Container';



import Profile from './Profile/Profile';
import ContainerTimeline from './Timeline/Timeline';
import Resume from './Resume/Resume'
import Footer from './Footer/Footer';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function App() {
  const classes = useStyles();

  return (
  <div>
    
    <Container>
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Profile/>
            <ContainerTimeline/>
          </Paper>
        </Grid>
        <Grid item sm={8}>
          <Paper className={classes.paper}  style={{backgroundColor:'#e0e0e0'}}>
            <Header/>
           <Resume/>

<br/>
<Footer/>
            </Paper>
        </Grid>
        </Grid>
        </div>
        </Container>
  </div>
  );
}

export default App;
