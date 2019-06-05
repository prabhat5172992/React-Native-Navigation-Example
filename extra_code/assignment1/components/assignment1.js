import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import { products } from "./constants1";
export default class Assignment1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.productTitle}>Products List</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <Text key={item.id}>
              {`${item.id})`} {item.productname} {item.quantity}
            </Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    marginVertical: 50,
    marginHorizontal: 20
  },
  productTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    marginVertical: 10
  }
});
