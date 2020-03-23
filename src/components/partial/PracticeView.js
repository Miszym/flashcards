import React from 'react';
import Card from '../elements/Card';
import { Button, Grid, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const PracticeView = ({
   cardAmount,
   currentPassed,
   currentCard,
   handleCheck,
   finishRun,
   reverted
}) => {
   const theme = useTheme();
   const useStyles = makeStyles({
      container: {
         paddingTop: '1rem'
      },
      button: {
         width: '100%',
         height: '3rem',
         marginTop: '1rem'
      },
      check: {
         backgroundColor: theme.palette.success.main,
         '&:hover': {
            backgroundColor: theme.palette.success.dark
         }
      },
      fail: {
         backgroundColor: theme.palette.error.main,
         '&:hover': {
            backgroundColor: theme.palette.error.dark
         }
      }
   });
   const classes = useStyles();

   return (
      <Grid container justify="center" className={classes.container}>
         <Grid item>
            <Grid>
               <Typography align="right" variant="h4">
                  Passed: {currentPassed}/{cardAmount}
               </Typography>
               <Card
                  frontText={
                     reverted ? currentCard.definition : currentCard.description
                  }
                  backText={
                     reverted ? currentCard.description : currentCard.definition
                  }
               ></Card>
            </Grid>
            <Grid>
               <Button
                  variant="contained"
                  className={`${classes.button} ${classes.check}`}
                  onClick={() => handleCheck(true, currentCard)}
               >
                  <CheckIcon></CheckIcon>
               </Button>
            </Grid>
            <Grid>
               <Button
                  variant="contained"
                  className={`${classes.button} ${classes.fail}`}
                  onClick={() => handleCheck(false, currentCard)}
               >
                  <CloseIcon></CloseIcon>
               </Button>
            </Grid>
            <Grid>
               <Button
                  variant="contained"
                  className={classes.button}
                  color="primary"
                  onClick={() => finishRun(true)}
               >
                  finish run
               </Button>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default PracticeView;
