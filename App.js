import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ListDecks from './components/ListDecks'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <ListDecks />
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8
  }
})
