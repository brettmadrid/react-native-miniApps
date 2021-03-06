import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import { AuthSession } from 'expo'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Homescreen</Text>
      <Button
        title='Go to Components Demo'
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title='Go to Image Screen'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='Go to Counter Demo'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Go to Color Screen'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='Go to Square Screen'
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title='Go to Text Screen'
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title='Go to Box Screen'
        onPress={() => navigation.navigate('Box')}
      />
      <Button
        title='Go to Flex Screen'
        onPress={() => navigation.navigate('Flex')}
      />
      <Button
        title='Go to WebView Screen'
        onPress={() => navigation.navigate('Webview')}
      />
      <Button
        title='Go to Position Screen'
        onPress={() => navigation.navigate('Position')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
