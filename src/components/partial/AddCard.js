import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addCard } from '../../redux/cards';
import { useDispatch } from 'react-redux';

const AddCard = () => {
   const dispatch = useDispatch();
   const INITIAL_CARD_STATE = { frontText: '', backText: '' };
   const [cardText, setCardText] = useState(INITIAL_CARD_STATE);

   const useStyles = makeStyles({
      root: {
         maxWidth: '20rem'
      }
   });
   const classes = useStyles();

   const handleTextChange = ({ name, value }) => {
      setCardText(prev => ({
         ...prev,
         [name]: value
      }));
   };

   const handleAdd = () => {
      const date = new Date();
      dispatch(addCard(date, cardText));
      setCardText(INITIAL_CARD_STATE);
   };

   return (
      <Grid container direction="column" className={classes.root}>
         <TextField
            name="frontText"
            value={cardText.frontText}
            label="Front side"
            onChange={e => handleTextChange(e.target)}
         ></TextField>
         <TextField
            name="backText"
            value={cardText.backText}
            label="Back side"
            onChange={e => handleTextChange(e.target)}
         ></TextField>
         <Button
            variant="contained"
            disabled={!cardText.frontText || !cardText.backText}
            color="primary"
            onClick={handleAdd}
         >
            Add new card
         </Button>
      </Grid>
   );
};

export default AddCard;
