import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const StatsView = ({ stats: { cardAmount, tries, fails } }) => {
   const useStyles = makeStyles({
      root: {
         paddingTop: '2rem'
      },
      button: {
         marginTop: '2rem'
      }
   });
   const classes = useStyles();
   return (
      <Grid container justify="center" className={classes.root}>
         <Grid item>
            <Typography variant="h4">Practice stats</Typography>
            <Typography variant="h6">cards: {cardAmount}</Typography>
            <Typography variant="h6">tries: {tries}</Typography>
            <Typography variant="h6">fails: {fails}</Typography>
            <Typography variant="h6">
               efficiency:{' '}
               {tries === 0
                  ? '0%'
                  : `${Math.floor(((tries - fails) / tries) * 100)}%`}
            </Typography>
            <Link to="/">
               <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
               >
                  Home
               </Button>
            </Link>
         </Grid>
      </Grid>
   );
};

export default StatsView;
