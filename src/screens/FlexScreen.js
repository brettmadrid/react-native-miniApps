import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const FlexScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Flex Child #1</Text>
      <Text style={styles.textTwoStyle}>Flex Child #2</Text>
      <Text style={styles.textThreeStyle}>Flex Child #3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    alignItems: 'center',
  },
  textOneStyle: {
    borderWidth: 2,
    borderColor: 'red',
  },
  textTwoStyle: {
    borderWidth: 2,
    borderColor: 'red',
    alignSelf: 'stretch',
  },
  textThreeStyle: {
    borderWidth: 2,
    borderColor: 'red',
  },
})

export default FlexScreen
