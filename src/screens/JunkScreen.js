import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function JunkScreen() {
  return (
    <View>
      <Text style={styles.first}>Getting start with React Native!</Text>
      <Text>My name is {name}</Text>
    </View>
  )
}
const name = "Noel"

const styles = StyleSheet.create({
  first: {
    fontSize: 45,
  },
  second: {
    fontSize: 20,
  },
})
