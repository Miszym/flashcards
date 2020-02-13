import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';

const Main = () => {
   const theme = useTheme();
   const useStyles = makeStyles({
      root: {
         backgroundColor: theme.colorSand,
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
               <Link to="/practice">
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
