import React, { Component } from 'react'
import { orange, lightblue } from '../utils/colors'
import { addCard } from '../actions'
import { connect } from 'react-redux'
import { newCardToDeck } from '../utils/api'
import { CommonActions } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native'

class NewCard extends Component {

  state = {
    question: '',
    answer: '',
    corrAnswer: ''
  }
  submittedCard = (deck) => {
    const { question, answer, corrAnswer } = this.state
    this.props.dispatch(addCard({ question, answer, corrAnswer, deck }))
    newCardToDeck(deck, { question, answer, corrAnswer })
    this.setState({ question:'', answer:'', corrAnswer:'' })
    this.props.navigation.dispatch(CommonActions.goBack())
  }

  render() {
    const deckName = this.props.route.params.Eid

    return(
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.container}>
          <Text style={styles.text}>Add your Question?</Text>
          <TextInput style={styles.inpText}
            onChangeText={(question) => this.setState({question})} 
            value={this.state.question}
            placeholder='Enter Question'
            ></TextInput>

          <Text style={styles.text}>Add Your Answer</Text>
          <TextInput style={styles.inpText}
            onChangeText={(answer) => this.setState({answer})} 
            value={this.state.answer}
            placeholder='Your Answer'
          ></TextInput>

          <Text style={styles.text}>True or False</Text>
          <TextInput style={styles.inpText}
            onChangeText={(corrAnswer) => this.setState({corrAnswer})} 
            value={this.state.corrAnswer}
            placeholder='Correct Answer'
          ></TextInput>

          <TouchableOpacity style={styles.btn} onPress={() => this.submittedCard(deckName)}>
            <Text style={styles.btnText}>Submit!</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#95d5db'
  },
  btn: {
    backgroundColor: '#138504',
    padding: 10,
    borderRadius: 6,
    fontSize: 20,
    borderColor: 'black'
  },
  btnText: {
    color: 'white',
    textAlign: 'center'
  },
  text: {
    color: '#2f08bf',
    fontSize: 16
  },
  inpText: {
    borderRadius: 6,
    height: 35,
    width: 250,
    margin: 22,
    padding: 7,
    borderWidth: 1
  }
})

export default connect()(NewCard)