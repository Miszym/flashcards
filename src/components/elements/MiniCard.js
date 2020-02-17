import React from 'react';
import {
   Card as MuiCard,
   CardContent,
   Divider,
   Button
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const MiniCard = ({ frontText, backText }) => {
   const theme = useTheme();
   const useStyles = makeStyles({
      root: {
         width: '8rem',
         height: '15rem',
         backgroundColor: theme.palette.primary.main,
         color: theme.colorIceLight,
         textAlign: 'center'
      },
      content: {
         height: '50%'
      },
      divider: {
         border: `1px solid ${theme.palette.secondary.main}`
      }
   });
   const classes = useStyles();
   return (
      <MuiCard color="primary" className={classes.root}>
         <CardContent className={classes.content}>{frontText}</CardContent>
         <Divider className={classes.divider}></Divider>
         <CardContent className={classes.content}>{backText}</CardContent>
      </MuiCard>
   );
};

export default MiniCard;
