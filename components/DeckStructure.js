import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { giveData } from '../utils/api'
import { connect } from 'react-redux'
import AddingButton from './AddingButton'
import { lightgreen, navy } from '../utils/colors'

class DeckStructure extends Component {
  render() {
      const deck = this.props.route.params.Eid;
      const { deckss } = this.props
    
    return(
      <View style={styles.container}>
        <Text>{deckss[deck].title}</Text>
        <Text>{deckss[deck].questions.length}</Text>
        <AddingButton styles={styles} text={'Add New Card'} color={navy}
        onPress={() => this.props.navigation.navigate('NewCard',{ Eid: deck })} />
        <AddingButton styles={styles} text={'Start Quiz'} color={lightgreen}
        onPress={() => this.props.navigation.navigate('MainQuiz',{ Eid: deck })} />
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
  }
})

function mapStateToProps(deckss) {
  return {
    deckss
  }
}

export default connect(mapStateToProps)(DeckStructure)