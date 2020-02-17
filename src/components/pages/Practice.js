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

   useEffect(() => {
      switch (filter) {
         case 'RANDOM':
            createRandomSet();
            break;
         default:
            createRandomSet();
      }
   }, []);

   useEffect(() => {
      if (tries !== 0 && practiceCardList.length === 0) {
         setPracticeOver(true);
      }
      pickRandomCard();
   }, [practiceCardList, tries]);

   const pickRandomCard = () => {
      const length = practiceCardList.length;
      const rand = Math.floor(Math.random() * length);
      setCurrent(practiceCardList[rand]);
   };

   const createRandomSet = () => {
      const randomCards = [...allCardList];
      while (randomCards.length > cardAmount) {
         const randomIndex = Math.floor(Math.random() * randomCards.length);
         randomCards.splice(randomIndex, 1);
      }
      setPracticeCardList(randomCards);
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
      console.log(tries + ' ' + fails);
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
