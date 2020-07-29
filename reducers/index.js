import { ADD_DECK, ADD_CARD_DECK, RECEIVE_DECKS} from "../actions";

function deck(state = {}, action) {
  switch(action.type) {
    case ADD_DECK: {
      const newDeck = {
      [action.deck]: {
          title: action.deck,
          questions: []
        }
      }
      return {
        ...state,
        ...newDeck
      }
    }
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.deckss
      }
    case ADD_CARD_DECK: {
      const { question, answer, deck, corrAnswer } = action.card
      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: [...state[deck].question, { question, answer, corrAnswer }]
        }
      }
    }
    default:
      return state
  }
}

export default deck