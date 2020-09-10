import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

const WebViewScreen = () => {
  return (
    <WebView
      source={{
        uri:
          'https://docs.google.com/forms/d/e/1FAIpQLSfduj__CFANkePWEh8NDYKboKpdWkoiqVSNxPtJoUXaOjGZoQ/viewform',
      }}
    />
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
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

export default WebViewScreen
