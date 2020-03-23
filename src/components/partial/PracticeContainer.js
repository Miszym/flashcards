import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PracticeSetup from '../pages/PracticeSetup';
import Practice from '../pages/Practice';
import { useSelector, useDispatch } from 'react-redux';
import { saveData } from '../../redux/cards';

const PracticeContainer = () => {
   const MAX_AMOUNT = useSelector(state => state.length);
   const MIN_AMOUNT = 1;
   const [cardAmount, setCardAmount] = useState(MAX_AMOUNT);
   const [filter, setFilter] = useState('RANDOM');
   const [reverted, setReverted] = useState(false);
   const dispatch = useDispatch();

   const setAmount = ({ target }) => {
      const amount = target.value;
      if (
         amount === '' ||
         (!isNaN(amount) && amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)
      ) {
         setCardAmount(amount);
      }
   };

   useEffect(() => {
      return () => {
         dispatch(saveData());
      };
   });

   return (
      <>
         <Route exact path="/practice/start">
            <Practice
               cardAmount={cardAmount === '' ? 1 : cardAmount}
               filter={filter}
               reverted={reverted}
            />
         </Route>
         <Route exact path="/practice/Setup">
            <PracticeSetup
               setupData={{
                  setAmount,
                  cardAmount,
                  MIN_AMOUNT,
                  MAX_AMOUNT,
                  filter,
                  setFilter,
                  reverted,
                  setReverted
               }}
            />
         </Route>
      </>
   );
};

export default PracticeContainer;
