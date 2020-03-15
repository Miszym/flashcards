import React, { useEffect } from 'react';
import MiniCard from '../elements/MiniCard';
import AddCard from '../partial/AddCard';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { removeCard, saveData } from '../../redux/cards';
import { useDispatch, useSelector } from 'react-redux';

const EditCards = () => {
   const state = useSelector(state => state);
   console.log(state);
   const dispatch = useDispatch();
   const useStyles = makeStyles({
      addCard: {
         margin: '1rem 0 0 1rem'
      },
      cardList: {
         display: 'flex',
         flexWrap: 'wrap'
      },
      card: {
         margin: '1rem'
      }
   });
   const classes = useStyles();

   useEffect(() => {
      return () => {
         dispatch(saveData());
      };
   });

   const miniCards = state.map(card => (
      <div className={classes.card}>
         <MiniCard
            frontText={card.description}
            backText={card.definition}
         ></MiniCard>
         <Button
            variant="contained"
            onClick={() => dispatch(removeCard(card.description))}
         >
            remove
         </Button>
      </div>
   ));

   return (
      <div>
         <Grid className={classes.addCard}>
            <AddCard></AddCard>
            <Grid className={classes.cardList}>{miniCards}</Grid>
         </Grid>
      </div>
   );
};

export default EditCards;
