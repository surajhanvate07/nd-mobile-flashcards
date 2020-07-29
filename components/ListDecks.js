import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { giveData } from '../utils/api'
import { receiveDecks } from '../actions'
import { getDecks } from '../utils/api'

class ListDecks extends Component {

  componentDidMount() {
    getDecks()
    .then(deckss => this.props.receiveTotalDecks(deckss))
  }

  render() {
    const { deckss } = this.props;
    
    return(
      <View style={styles.container}>
        {Object.keys(deckss).map((deck) => {
          const { title, questions } = deckss[deck]
          return (
            <View key={deck}>
              <Text style={styles.text}>{title}</Text>
              <Text>{questions.length}</Text>
              <Button 
              title="View Deck"
              onPress={() => this.props.navigation.navigate('DeckStructure', {Eid: deck})}
              >
              </Button>
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: "bold"
  }
})

function mapStateToProps(deckss){
  return {
    deckss,
  }
}

function mapDispatchToProps(dispatch){
  return {
    receiveTotalDecks: (deckss) => { dispatch(receiveDecks(deckss)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDecks)