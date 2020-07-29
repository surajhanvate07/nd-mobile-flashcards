import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function AddingButton({ onPress, color, text, styles }){
  return(
    <TouchableOpacity onPress={onPress} 
      style={[styles.btn, {backgroundColor: color}]}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  )
}