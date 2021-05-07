import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return 'Loading..';
    }
      
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
               <Grid item component={Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>infected</Typography>
                      <Typography variant="h5">
                          <CountUp
                          start={0}
                          end={confirmed.value}
                          duration={2.5}
                          separator=","
                          />
                      </Typography>
                      <Typography color="textSecondary">
                          {new Date(lastUpdate).toDateString()}
                      </Typography>
                      <Typography variant="body2">Number of active cases of COVID-19</Typography>
                  </CardContent>
               </Grid>
               <Grid item component={Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                      <Typography variant="h5">data</Typography>
                      <Typography color="textSecondary" >date</Typography>
                      <Typography variant="body2">Number of People  Recover from COVID-19</Typography>
                  </CardContent>
               </Grid>
               <Grid item component={Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Death</Typography>
                      <Typography variant="h5">data</Typography>
                      <Typography color="textSecondary" >date</Typography>
                      <Typography variant="body2">Number of death due to COVID-19</Typography>
                  </CardContent>
               </Grid>
            </Grid>
        </div>
    );
};

export default Cards;