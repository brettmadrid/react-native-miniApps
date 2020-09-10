import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FlexScreen from './FlexScreen'

const PositionScreen = () => {
  return (
    <>
      <View style={styles.textViewStyle}>
        <Text style={styles.textStyle}>App</Text>
      </View>
      <View style={styles.viewStyle}>
        <View style={styles.boxOneStyle} />
        <View style={styles.boxTwoStyle} />
        <View style={styles.boxThreeStyle} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textViewStyle: {
    borderWidth: 2,
    borderRightColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
    paddingVertical: 20,
  },
  boxOneStyle: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  boxTwoStyle: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'green',
    height: 100,
    width: 100,
    top: 100,
  },
  boxThreeStyle: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#bbb',
    height: 100,
    width: 100,
  },
})

export default PositionScreen
