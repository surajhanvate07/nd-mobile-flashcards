import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
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
            <View key={deck} style={styles.cardItem}>
              <Text style={styles.text}>{title}</Text>
              <Text style={styles.len}>{questions.length}</Text>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DeckStructure', {Eid: deck})}
              > <Text style={styles.btnText}>View Deck</Text>
              </TouchableOpacity>
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
    alignSelf:'stetched', 
    padding: 5
  },
  cardItem: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    height: 200,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: '#a1f06c'
  },
  btnText: {
    backgroundColor: '#802ab5',
    borderRadius: 3,
    color: 'white',
  },
  text: {
    fontWeight: "bold",
    fontSize: 22
  },
  len: {
    fontSize: 18
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