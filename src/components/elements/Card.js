import React, { useEffect, useState } from 'react';
import { Card as MuiCard, CardContent, Grid, Box } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const Card = ({ children, frontText, backText }) => {
   const theme = useTheme();
   const useStyles = makeStyles({
      root: {
         height: '25rem',
         width: '20rem',
         fontSize: '2rem',
         cursor: 'pointer',
         position: 'relative'
      },
      card: {
         backgroundColor: theme.palette.primary.main,
         color: theme.palette.secondary.main,
         textAlign: 'center',
         height: '100%',
         width: '100%',
         position: 'absolute',
         backfaceVisibility: 'hidden',
         transition: 'transform 0.8s ease, background-color 0.2s',
         '&:hover': {
            backgroundColor: theme.palette.primary.dark
         }
      },
      back: {
         transform: 'rotateY(180deg)'
      },
      container: {
         paddingTop: '1rem'
      },
      flipFront: {
         transform: 'rotateY(180deg)'
      },
      flipBack: {
         transform: 'rotateY(0deg)'
      }
   });
   const classes = useStyles();
   //TODO refactor
   const flipCard = () => {
      document.querySelector('#cardFront').classList.toggle(classes.flipFront);
      document.querySelector('#cardBack').classList.toggle(classes.flipBack);
   };

   //for preventing peeking next definition
   const [delayedBackText, setDelayedBackText] = useState('');
   useEffect(() => {
      setTimeout(() => {
         setDelayedBackText(backText);
      }, 200);
   });

   return (
      <Grid container justify="center" className={classes.container}>
         <Box className={classes.root} onClick={flipCard}>
            <MuiCard id="cardFront" className={classes.card}>
               <CardContent>{frontText}</CardContent>
            </MuiCard>
            <MuiCard
               id="cardBack"
               className={`${classes.card} ${classes.back}`}
            >
               <CardContent>{delayedBackText}</CardContent>
            </MuiCard>
         </Box>
      </Grid>
   );
};

export default Card;
