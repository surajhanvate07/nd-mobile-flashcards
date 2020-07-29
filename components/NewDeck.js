import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { addNewDeck } from '../actions'
import { connect } from 'react-redux'

class NewDeck extends Component {

  state = {
    initText : ''
  }
  submitDeck = () => {
    const { initText } = this.state

    saveDeckTitle(initText)
    this.props.dispatch(addNewDeck(initText))
    this.props.navigation.navigate('DeckStructure',{ Eid: initText })
    this.setState({ initText: '' })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Deck Title</Text>
        <TextInput onChangeText={(initText) => this.setState({ initText: initText })}
          value={this.state.initText}
          style={styles.ipText}
          placeholder=' Enter Title'>
        </TextInput>
        <Button onPress={this.submitDeck} title='submit' style={styles.subBtn}>
        </Button>
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
  ipText: {
    width : 190,
    height : 42,
    borderWidth: 1,
    margin: 45,
    borderRadius: 8,
    borderColor: 'red'
  },
  text: {
    fontSize: 30,
    color: '#3b078f'
  },
  subBtn: {
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 7,
    padding: 10,
    backgroundColor: 'red'
  }
})

export default connect()(NewDeck)