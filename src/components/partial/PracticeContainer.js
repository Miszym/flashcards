import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import PracticeSetup from '../pages/PracticeSetup';
import Practice from '../pages/Practice';
import { useSelector } from 'react-redux';

const PracticeContainer = () => {
   const MAX_AMOUNT = useSelector(state => state.length);
   const MIN_AMOUNT = 1;
   const [cardAmount, setCardAmount] = useState(MAX_AMOUNT);
   const [filter, setFilter] = useState('RANDOM');

   const setAmount = ({ target }) => {
      const amount = target.value;
      if (
         amount === '' ||
         (!isNaN(amount) && amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)
      ) {
         setCardAmount(amount);
      }
   };
   return (
      <>
         <Route exact path="/practice/start">
            <Practice
               cardAmount={cardAmount === '' ? 1 : cardAmount}
               filter={filter}
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
                  setFilter
               }}
            />
         </Route>
      </>
   );
};

export default PracticeContainer;
