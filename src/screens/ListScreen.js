import React from "react"
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native"

const ListScreen = () => {
  const PRODUCTS = [
    { productName: "Calico Top", productId: 101 },
    { productName: "DiMarco Top", productId: 102 },
    { productName: "Gemini Top", productId: 103 },
    { productName: "Synergyst Top", productId: 104 },
  ]
  const ItemInListComponent = ({ propName, propId }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{propName}</Text>
      <Text>{propId}</Text>
    </View>
  )

  const renderProduct = ({ item }) => (
    <ItemInListComponent propName={item.productName} propId={item.productId} />
  )
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>ListScreen</Text>
      <FlatList
        data={PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={(something) => something.productId}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#09c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: "#000000",
  },
})
export default ListScreen
