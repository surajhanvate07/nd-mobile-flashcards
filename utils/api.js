import { AsyncStorage } from 'react-native'

const FLASHCARDS_DATA_KEY = "flashcards_decks";

const startData = {
  Sports: {
    title: 'Cricket',
    questions: [
      {
        question: 'Who won 2015 world cup?',
        answer: 'Australia',
        corrAnswer: 'true'
      },
      {
        question: 'Who won 2019 world cup?',
        answer: 'England',
        corrAnswer: 'true'
      }
    ]
  },
  Music: {
    title: 'Music',
    questions: [
      {
        question: 'Despacito is sung By',
        answer: 'Ed Sheeren',
        corrAnswer: 'false'
      },
      {
        question: 'Justin Bieber is Football Player or Singer',
        answer: 'Singer',
        corrAnswer: 'true'
      }
    ]
  },
  Movie: {
    title: 'Movie',
    questions: [
      {
        question: 'Captain America character is played by?',
        answer: 'Chris Hemsworth',
        corrAnswer: 'false'
      }
    ]
  }
};

export const giveData = () => {
  return {
    startData
  } 
}

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARDS_DATA_KEY)
  .then(res =>{
    if(res === null) {
      AsyncStorage.setItem(FLASHCARDS_DATA_KEY,JSON.stringify(startData))
      return startData
    } else {
      return JSON.parse(res)
    }
  })
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(FLASHCARDS_DATA_KEY, JSON.stringify({
    [title]:{
      title: title,
      questions: []
    }
  }))
}

export function newCardToDeck(name, card) {
  return AsyncStorage.getItem(FLASHCARDS_DATA_KEY)
  .then(res => JSON.parse(res))
  .then(res => {
    res[name].questions.push(card)
    AsyncStorage.setItem(FLASHCARDS_DATA_KEY, JSON.stringify(res))
    return res
  })
}

export function removeDeck(title) {
  return AsyncStorage.mergeItem(FLASHCARDS_DATA_KEY, JSON.stringify({
    [title]:{
      title: title,
      questions: []
    }
  }))
  return AsyncStorage.getItem(FLASHCARDS_DATA_KEY).then((deckss)=>{
      const data=JSON.parse(deckss)
      data[title]=undefined
      delete data[title]
     AsyncStorage.setItem(FLASHCARDS_DATA_KEY,JSON.stringify(data))
  })
}