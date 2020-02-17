import React from 'react';
import {
   TextField,
   Grid,
   RadioGroup,
   Radio,
   FormControlLabel
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const PracticeSetup = ({
   setupData: {
      cardAmount,
      setAmount,
      MIN_AMOUNT,
      MAX_AMOUNT,
      filter,
      setFilter
   }
}) => {
   const theme = useTheme();
   const useStyles = makeStyles({
      root: {
         paddingTop: '20px',
         paddingLeft: '50px'
      },
      section: {
         marginBottom: '20px'
      },
      input: {
         color: theme.palette.primary.main,
         width: '200px'
      },
      link: {
         textDecoration: 'none',
         color: theme.colorIceLight
      }
   });
   const classes = useStyles();

   return (
      <Grid container direction="column" className={classes.root}>
         <Grid item className={classes.section}>
            <TextField
               label={`How many cards (${MIN_AMOUNT}-${MAX_AMOUNT})`}
               type="text"
               value={cardAmount}
               onChange={e => setAmount(e)}
               InputProps={{ className: classes.input }}
            />
         </Grid>
         <Grid item className={classes.section}>
            <RadioGroup onChange={e => setFilter(e.target.value)}>
               <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Random"
                  value="RANDOM"
                  checked={filter === 'RANDOM'}
               ></FormControlLabel>
               <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Easy set"
                  value="EASY"
                  checked={filter === 'EASY'}
               ></FormControlLabel>
               <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Hard set"
                  value="HARD"
                  checked={filter === 'HARD'}
               ></FormControlLabel>
               {/* <FormControlLabel
                  control={<Radio color="primary" />}
                  label="Most recently added"
                  value="NEW"
                  checked={filter === 'NEW'}
               ></FormControlLabel> */}
            </RadioGroup>
         </Grid>
         <Grid item className={classes.section}>
            <Button
               disabled={cardAmount === ''}
               variant="contained"
               color="primary"
            >
               <Link to="/practice/start" className={classes.link}>
                  Start
               </Link>
            </Button>
         </Grid>
      </Grid>
   );
};

export default PracticeSetup;
