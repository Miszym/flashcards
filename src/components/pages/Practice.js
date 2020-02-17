import React, { useEffect, useState } from 'react';
import { incrementStats } from '../../redux/cards';
import { useSelector, useDispatch } from 'react-redux';
import PracticeView from '../partial/PracticeView';
import StatsView from '../partial/StatsView';

const Practice = ({ cardAmount, filter }) => {
   const allCardList = useSelector(state => state);
   const dispatch = useDispatch();
   const [practiceCardList, setPracticeCardList] = useState([]);
   const [fails, setFails] = useState(0);
   const [tries, setTries] = useState(0);
   const [current, setCurrent] = useState({});
   const [practiceOver, setPracticeOver] = useState(false);
   const [lastPickedCard, setLastPickedCard] = useState(null);

   useEffect(() => {
      createSet(filter);
   }, []);

   useEffect(() => {
      if (tries !== 0 && practiceCardList.length === 0) {
         setPracticeOver(true);
      }
      pickRandomCard();
   }, [practiceCardList, tries]);

   const pickRandomCard = () => {
      const length = practiceCardList.length;
      let rand = -1;
      if (practiceCardList.length > 1) {
         do {
            rand = Math.floor(Math.random() * length);
         } while (rand === lastPickedCard);
      } else rand = 0;
      setCurrent(practiceCardList[rand]);
      setLastPickedCard(rand);
   };

   const createSet = filter => {
      const randomCards = [...allCardList];
      while (randomCards.length > cardAmount) {
         const index = getIndexToSplice(filter, randomCards);
         randomCards.splice(index, 1);
      }
      setPracticeCardList(randomCards);
   };

   const getIndexToSplice = (method, randomCards) => {
      switch (filter) {
         case 'RANDOM':
            return Math.floor(Math.random() * randomCards.length);
         case 'EASY':
            let hardest = Infinity;
            let hardestIndex = 0;
            randomCards.forEach((card, index) => {
               console.log(index);
               const factor =
                  card.failed === 0 ? Infinity : card.passed / card.failed;
               if (factor < hardest) {
                  hardestIndex = index;
                  hardest = factor;
               }
            });
            return hardestIndex;
         case 'HARD':
            let easiest = 0;
            let easiestIndex = 0;
            randomCards.forEach((card, index) => {
               console.log(index);
               const factor =
                  card.failed === 0 ? Infinity : card.passed / card.failed;
               if (factor > easiest) {
                  easiestIndex = index;
                  easiest = factor;
               }
            });
            return easiestIndex;
         default:
            return 0;
      }
   };

   const handleCheck = (success, card) => {
      dispatch(incrementStats(card.description, success));
      if (success) {
         setPracticeCardList(prev =>
            prev.filter(c => c.description !== card.description)
         );
      } else {
         setFails(prev => prev + 1);
      }
      setTries(prev => prev + 1);
   };

   return practiceOver ? (
      <StatsView stats={{ cardAmount, tries, fails }} />
   ) : (
      <PracticeView
         cardAmount={cardAmount}
         currentPassed={cardAmount - practiceCardList.length}
         currentCard={current ? current : { description: '', definition: '' }}
         handleCheck={handleCheck}
         finishRun={setPracticeOver}
      />
   );
};

export default Practice;
