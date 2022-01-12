import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import Secondary from './Secondary';
import High from './High';
import Ug from './Ug';
import Pg from './Pg';
import { Education } from './Education';


const ContainerResume = () => {
    return (
       <div>
           <br/>
           <Grid  align="center">
              <Carousel Container>
             <High/>
            <Secondary/>
            <Ug/>
            <Pg/>
            </Carousel>
              </Grid>
            
              <Grid>
                  <Paper> 
                  <Education/>
              </Paper>
              </Grid>
             
       </div>
        )
}

export default ContainerResume;
