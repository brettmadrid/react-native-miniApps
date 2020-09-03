import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const username = 'Brett'
  const greeting = (
    <Text style={styles.greetingStyle}>My name is {username}</Text>
  )
  const header = (
    <Text style={styles.textStyle}>Getting started with react native!</Text>
  )

  return (
    <View style={styles.container}>
      {header}
      {greeting}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#81A293',
    height: '100%',
  },
  textStyle: {
    fontSize: 45,
    color: '#333',
  },
  greetingStyle: {
    fontSize: 20,
    color: '#333',
  },
})

export default ComponentsScreen
