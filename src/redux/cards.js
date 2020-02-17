import flashcards from '../data/flashcards';

export function addCard(date, text) {
   return {
      type: 'ADD_CARD',
      date: date,
      text: text
   };
}

export function removeCard() {
   return {
      type: 'REMOVE_CARD'
   };
}

export function incrementStats(description, success) {
   return {
      type: 'INCREMENT_STATS',
      payload: description,
      success: success
   };
}

export default function cards(cards = flashcards, action) {
   switch (action.type) {
      case 'ADD_CARD':
         const newCard = {
            description: action.text.frontText,
            definition: action.text.backText,
            failed: 0,
            passed: 0,
            creationDate: action.date
         };
         return [...cards, newCard];
      case 'INCREMENT_STATS':
         const card = cards.find(card => card.description === action.payload);
         if (!card) {
            return cards;
         }
         if (action.success) {
            card.passed++;
         } else {
            card.failed++;
         }
         return [
            ...cards.filter(card => card.description !== action.payload),
            card
         ];

      default:
         return cards;
   }
}
