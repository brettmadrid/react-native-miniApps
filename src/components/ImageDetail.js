import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>Show image of {title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  )
}

const style = StyleSheet.create({})

export default ImageDetail
