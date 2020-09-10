import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
  const [pwd, setPwd] = useState('')
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={pwd}
        onChangeText={newValue => setPwd(newValue)}
      />
      {pwd.length < 6 && (
        <Text style={styles.errMsg}>
          Password must be longer than 5 characters
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
  },
  errMsg: {
    color: 'red',
    fontSize: 12,
  },
})

export default TextScreen
