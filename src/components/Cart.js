import React, { useState } from "react"
import { StyleSheet, Text, View, Button } from "react-native"

const Cart = () => {
  const [cart, setCart] = useState(0)

  return (
    <View>
      <Button
        title="Add to Cart"
        onPress={() => {
          setCart(cart + 1)
        }}
      />
      <Button
        title="Remove From Cart"
        onPress={() => {
          setCart(cart - 1)
        }}
      />

      <Text>{cart} </Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Cart
