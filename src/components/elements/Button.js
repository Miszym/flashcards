import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Button as MuiButton } from '@material-ui/core';

const Button = props => {
   const theme = useTheme();
   const useStyles = makeStyles({
      root: {
         backgroundColor: theme.colorLake,
         color: theme.colorIceLight,
         width: '100%',
         height: '80px',
         fontSize: '20px'
      }
   });
   const classes = useStyles();

   return (
      <MuiButton variant="contained" className={classes.root}>
         {props.children}
      </MuiButton>
   );
};

export default Button;
