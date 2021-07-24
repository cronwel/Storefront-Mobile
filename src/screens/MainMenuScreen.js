import React from "react"
import { View, Text, Button, TouchableOpacity } from "react-native"

const MainMenuScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("MainMenu")}>
        {" "}
        <Text> Main </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
        {" "}
        <Text> Product List </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        {" "}
        <Text> Home </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Capture")}>
        {" "}
        <Text> Capture </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Component1")}>
        {" "}
        <Text> Component </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Junk")}>
        {" "}
        <Text> Junk </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        {" "}
        <Text> List </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ListView")}>
        {" "}
        <Text> ListView </Text>
      </TouchableOpacity>
      <Text></Text>
    </View>
  )
}

export default MainMenuScreen
