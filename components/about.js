import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class About extends React.Component {
  static navigationOptions = () => ({
    title: "About Page",
    headerStyle: {
      backgroundColor: "#274de5"
    },
    headerTitleStyle: {
      color: "#fff"
    }
  });
  render() {
    return (
      <View style={styles.container}>
        <Text> This app provides information about the product </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
