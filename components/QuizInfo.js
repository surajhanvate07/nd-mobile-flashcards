import React,{ Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export function QuizInfo({ onPress, style, text }) {
  return(
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  )
}