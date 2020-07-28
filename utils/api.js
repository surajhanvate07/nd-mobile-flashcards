const startData = {
    Sports: {
      title: 'React',
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
    }
  }
  
  export const giveData = () => {
    return startData
  }
  