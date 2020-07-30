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
        <View style={styles.cardItem}>
          <Text style={styles.title}>{deckss[deck].title}</Text>
          <Text style={styles.subTitle}>{deckss[deck].questions.length}</Text>
          <AddingButton styles={styles} text={'Add New Card'} color={navy}
          onPress={() => this.props.navigation.navigate('NewCard',{ Eid: deck })} />
          <AddingButton styles={styles} text={'Start Quiz'} color={lightgreen}
          onPress={() => this.props.navigation.navigate('QuizView',{ Eid: deck })} />
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
    backgroundColor: '#95d5db',
    padding: 12
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
  cardItem: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    height: 200,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: '#de7ab9'
  },
  title: {
    fontSize: 50,
    marginBottom: 20
  },
  subTitle: {
    fontSize: 35,
    marginBottom: 80
  }
})

function mapStateToProps(deckss) {
  return {
    deckss
  }
}

export default connect(mapStateToProps)(DeckStructure)