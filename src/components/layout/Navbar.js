import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const Navbar = props => {
   const theme = useTheme();
   const useStyles = makeStyles({
      root: {
         backgroundColor: theme.colorLake,
         color: theme.colorIceLight
      },
      link: {
         textDecoration: 'none',
         color: theme.colorIceLight
      }
   });
   const classes = useStyles(props);

   return (
      <AppBar position="static" className={classes.root} data-testid="navbar">
         <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
               <MenuIcon color="inherit" data-testid="menuIcon" />
            </IconButton>
            <Link to="/" className={classes.link}>
               <Typography variant="h6">Flashcards</Typography>
            </Link>
         </Toolbar>
      </AppBar>
   );
};

export default Navbar;
