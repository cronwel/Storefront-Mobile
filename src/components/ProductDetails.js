import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const ProductDetails = (props) => {
  console.log(props)
  return (
    <View>
      <Image style={styles.imagestyle} source={props.productImage} />
      <Text> {props.productName} </Text>
      <Text> ${props.productPrice} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imagestyle: {
    height: 200,
    width: 300,
    alignItems: "center",
  },
})

export default ProductDetails
