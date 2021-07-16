import React from "react"
import { View, Text, StyleSheet } from "react-native"

const ComponentsScreen = () => {
  const greeting =
    "Well hello again. I'm actually a constant inside of the Component Screen"
  return (
    <View>
      <Text style={styles.textStyle}>Wow, look at this</Text>
      <Text> {greeting} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    fontFamily: "arial-narrow",
  },
})

export default ComponentsScreen
