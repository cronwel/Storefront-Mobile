import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

const ListViewScreen = () => {
  const products = [
    {
      productName: "UpperCutter",
      brand: "boxerface",
      price: 10,
      productId: "01",
      colors: { B: "blue", G: "green", Y: "yellow", W: "white" },
    },
    {
      productName: "Jabber",
      brand: "boxerface",
      price: 10,
      productId: "02",
      colors: { B: "blue", G: "green", Y: "yellow", W: "white" },
    },
    {
      productName: "Cutthroat",
      brand: "boxerface",
      price: 10,
      productId: "03",
      colors: { B: "blue", G: "green", Y: "yellow", W: "white" },
    },
    {
      productName: "JuJitsu",
      brand: "Podcaster",
      price: 13,
      productId: "04",
      colors: { B: "blue", G: "green", Y: "yellow", W: "white" },
    },
    {
      productName: "Blue Hawk",
      brand: "Cartoon-ish",
      price: 4,
      productId: "05",
      colors: { B: "blue", G: "green", Y: "yellow", W: "white" },
    },
    {
      productName: "Red Hawk",
      brand: "Cartoon-ish",
      price: 4,
      productId: "06",
      colors: { B: "blue", G: "green", Y: "yellow", W: "white" },
    },
    {
      productName: "Black Falcon",
      brand: "KeyPeele",
      price: 30,
      productId: "07",
      colors: { B: "blue", G: "green", Y: "yellow", W: "white" },
    },
    {
      productName: "Upright Muffin",
      brand: "Jacksonvillians",
      price: 1,
      productId: "08",
      colors: { B: "blue", G: "green", Y: "yellow", W: "white" },
    },
    {
      productName: "Uptowner",
      brand: "Second City",
      price: 10,
      productId: "09",
      colors: { B: "blue", G: "green", Y: "yellow", W: "white" },
    },
    {
      productName: "Winslow",
      brand: "KeyPeele",
      price: 20,
      productId: "10",
      colors: { B: "blue", G: "green", Y: "yellow", W: "white" },
    },
  ]

  return (
    <View>
      <Text style={styles.something}>Product Catalog</Text>
      <Text>
        The thing to note in the code here is that the renderItem function is
        passed through as a prop. That makes sense. I didn't catch that on the
        other example. It's worth noting that it's an anonymous function that
        executes automatically. It will automatically do what it will do. What
        it does is automatically take in the object it is being passed through
        and reference it's attributes. I call them attributes from an object.
        since each object has a productName and price. I refer to them by 'item'
        as the core element. 'item' is a required keyword, even if the name of
        the array is something else.
      </Text>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.listStyle}>{item.productName}</Text>
              <Text>
                ${item.price}.00 - {item.brand}- Available in {item.colors.B},{" "}
                {item.colors.G}
              </Text>
            </View>
          )
        }}
        keyExtractor={(jesse) => jesse.productId}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  something: {
    fontSize: 50,
  },
  listStyle: {
    fontSize: 20,
    marginVertical: 20,
  },
})

export default ListViewScreen
