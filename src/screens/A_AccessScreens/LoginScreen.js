import React from "react"
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native"

export default function LoginScreen() {
  return (
    <ScrollView style={styles.screenStyle}>
      <Text>UserName</Text>
      <TextInput style={styles.inputStyle} />
      <View>
        <Text>Password</Text>
        <TextInput style={styles.inputStyle}></TextInput>
        <Text inline>show</Text>
      </View>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />

      <Text>Trouble logging in? Click Here.</Text>
    </ScrollView>
  )
}

const wInput = "80%"
const mInput = "10%"
const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: "skyblue",
    maxHeight: "auto",
  },
  inputStyle: {
    // flex: 1,
    height: 40,
    margin: mInput,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    width: wInput,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
})
