import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
  },
  textStyle: {
    borderWidth: 1,
    padding: 4,
    borderColor: 'red',
    marginVertical: 20,
    margin: 20,
  },
})

export default BoxScreen
