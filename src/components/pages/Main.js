import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';

const Main = () => {
   const useStyles = makeStyles({
      root: {
         marginTop: '50px'
      }
   });
   const classes = useStyles();

   return (
      <Grid container justify="center" data-testid="main">
         <Grid
            container
            item
            direction="column"
            className={classes.root}
            spacing={3}
            xs={12}
            sm={8}
            md={6}
            lg={4}
         >
            <Grid item>
               <Link to="/practice/Setup">
                  <Button>Practice</Button>
               </Link>
            </Grid>
            <Grid item>
               <Link to="/AddCard">
                  <Button>Add cards</Button>
               </Link>
            </Grid>
            <Grid item>
               <Link to="/RemoveCards">
                  <Button>Remove cards</Button>
               </Link>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default Main;
