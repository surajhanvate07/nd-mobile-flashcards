import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { giveData } from '../utils/api'

class ListDecks extends Component {
  render() {
    const deckss = giveData()
    return (
      <View style={styles.container}>
        {Object.keys(deckss).map((deck) => {
          const { title, questions } = deckss[deck]
          return (
            <View>
              <Text style={styles.text}>{title}</Text>
              <Text>{questions.length}</Text>
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
    alignItems: 'center'
  },
  text: {
    fontWeight: "bold"
  }
});

export default ListDecks
