import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button as MuiButton } from '@material-ui/core';

const Button = props => {
   const useStyles = makeStyles({
      root: {
         width: '100%',
         height: '80px',
         fontSize: '20px'
      }
   });
   const classes = useStyles();

   return (
      <MuiButton variant="contained" color="primary" className={classes.root}>
         {props.children}
      </MuiButton>
   );
};

export default Button;
