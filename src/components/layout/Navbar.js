import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const Navbar = props => {
   const theme = useTheme();
   const useStyles = makeStyles({
      root: {
         backgroundColor: theme.colorLake,
         color: theme.colorIceLight
      }
   });
   const classes = useStyles(props);

   return (
      <AppBar position="static" className={classes.root}>
         <Toolbar container>
            <IconButton edge="start" color="inherit" aria-label="menu">
               <MenuIcon color="inherit" />
            </IconButton>
            <Typography variant="h6">Flashcards</Typography>
         </Toolbar>
      </AppBar>
   );
};

export default Navbar;
