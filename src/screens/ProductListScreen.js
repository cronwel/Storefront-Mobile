import React from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import ProductDetails from "../components/ProductDetails"
const ProductListScreen = () => {
  const ProductData = [
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
      <ProductDetails
        productName={ProductData[0].productName}
        productImage={require("../../assets/images_products/001.png")}
        productPrice="9.00"
      />
      <ProductDetails
        productName="Igloo"
        productImage={require("../../assets/images_products/002.png")}
        productPrice="9.00"
      />
      <ProductDetails
        productName="banana"
        productImage={require("../../assets/images_products/003.png")}
        productPrice="9.00"
      />
      <ProductDetails
        productName="gasoline"
        productImage={require("../../assets/images_products/004.png")}
        productPrice="9.00"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imagestyle: {
    height: 20,
    width: 30,
  },
})
export default ProductListScreen
