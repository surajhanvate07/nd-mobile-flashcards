import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { blue, red, orange, lightblue } from '../utils/colors'
import { connect } from 'react-redux'
import { AddingButton } from './AddingButton'

class QuizView extends Component {
  render() {
    return(
      <View>
        <Text>This is QuizView Component</Text>
      </View>
    )
  }
}

export default QuizView