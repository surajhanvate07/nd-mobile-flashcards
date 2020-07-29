export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_CARD_DECK = 'ADD_CARD_DECK'

export function addNewDeck (deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function receiveDecks(deckss) {
  return {
    type: RECEIVE_DECKS,
    deckss
  }
}
export function addCard (card) {
  return {
    type: ADD_CARD_DECK,
    card
  }
}