import flashcards from '../data/flashcards';

export function addCard(date, text) {
   return {
      type: 'ADD_CARD',
      date: date,
      text: text
   };
}

export function removeCard(description) {
   return {
      type: 'REMOVE_CARD',
      payload: description
   };
}

export function incrementStats(description, success) {
   return {
      type: 'INCREMENT_STATS',
      payload: description,
      success: success
   };
}

export function saveData() {
   return {
      type: 'SAVE_DATA'
   };
}

export function getCardsFromStorage() {
   let localStorageFlashcards = JSON.parse(localStorage.getItem('data'));
   if (localStorageFlashcards && localStorageFlashcards.length > 0) {
      return localStorageFlashcards;
   } else return flashcards;
}

export default function cards(cards = getCardsFromStorage(), action) {
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
      case 'REMOVE_CARD':
         return cards.filter(card => card.description !== action.payload);

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
      case 'SAVE_DATA':
         localStorage.setItem('data', JSON.stringify(cards));
         return cards;
      default:
         return cards;
   }
}
