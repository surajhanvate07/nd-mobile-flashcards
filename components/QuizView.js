import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { CommonActions } from '@react-navigation/native'
import { blue, red, orange, green } from '../utils/colors'
import { connect } from 'react-redux'
import { QuizInfo } from './QuizInfo'
import AddingButton from './AddingButton'

class QuizView extends Component {

  state = {
    quesNo: 0,
    showQuestion: false,
    correct: 0,
    incorrect: 0
  }
  viewAnswer = () => (
    !this.state.showQuestion ? this.setState({ showQuestion: true })
      : this.setState({ showQuestion: false })
  );

  submitAnswer = () => {
    const { quesNo } = this.state
    const deckss= this.props.deckss
    const deck = this.props.route.params.Eid
    const correct = deckss[deck].questions[quesNo].corrAnswer.toLowerCase()
    const answer = deckss[deck].questions[quesNo].answer

    if(answer === correct){
      this.setState({ correct: this.state.correct + 1 })
    } 
    else {
      this.setState({ incorrect: this.state.incorrect + 1 })
    }
    this.setState({ quesNo: this.state.quesNo + 1, showQuestion: false })
  }
  repeatQuiz = () => {
    this.setState({
      quesNo: 0,
      showQuestion: false,
      correct: 0,
      incorrect: 0
    })
  }
  returnBack = () => {
    this.props.navigation.dispatch(CommonActions.goBack())
  }

  render() {
    const { quesNo } = this.state
    const deckss= this.props.deckss
    const number = this.state.quesNo + 1
    const deck = this.props.route.params.Eid

    if(quesNo === deckss[deck].questions.length) {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.ques}>You got {this.state.correct} out of {deckss[deck].questions.length}
            </Text>
            <AddingButton styles={styles} text={'Try Again'} color={red} 
              onPress={this.repeatQuiz}/>
            <AddingButton styles={styles} text={'Return Back'} color={green}
              onPress={this.returnBack}/>
          </View>
        </View>
      )
    }

    return(
      <View style={styles.container}>
        <View style={styles.card}> 
          <Text style={styles.qNo}>{number} / {deckss[deck].questions.length}</Text>
         
          {!this.state.showQuestion ? <Text style={styles.ques}>{deckss[deck].questions[quesNo].question}</Text>
           : <Text style={styles.ques}>{deckss[deck].questions[quesNo].answer}</Text>}

          {!this.state.showQuestion ? <QuizInfo style={styles.ans} text={'View Answer'} onPress={this.viewAnswer}></QuizInfo>
           : <QuizInfo style={styles.ans} text={'Show Question'} onPress={this.viewAnswer}></QuizInfo>}
        
          <AddingButton color={green} text={'Correct'} styles={styles} onPress={() => this.submitAnswer('true')} />
          <AddingButton color={red} text={'Incorrect'} styles={styles} onPress={() => this.submitAnswer('false')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#95d5db'
  },
  btn: {
    padding: 8,
    height: 45,
    borderRadius: 6,
    margin: 10,
    width: 150
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  qNo: {
    alignSelf: 'flex-start',
    fontSize: 20,
    margin: 5,
    position: 'absolute',
    left: 15,
    top: 15
  },
  ans: {
    fontSize: 20,
    //margin: 20,
    marginBottom: 20
  },
  card: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    height: 200,
    borderRadius: 20,
    alignSelf: 'stretch',
    backgroundColor: '#bba7eb'
  },
  ques:{
    fontSize: 35,
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'center'
  }
})

function mapStateToProps(deckss) {
  return {
    deckss
  }
}

export default connect(mapStateToProps)(QuizView)