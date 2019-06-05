import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

export default class Details extends React.Component {
  static navigationOptions = () => ({
    title: "Product Details",
    headerStyle: {
      backgroundColor: "#274de5"
    },
    headerTitleStyle: {
      color: "#fff"
    },
    headerTintColor: "#fff"
  });
  render() {
    const { navigation } = this.props;
    const details = navigation.getParam("data", "No Data");
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.title}>{details.productname}</Text>
          <Text style={styles.content}>{`ID: ${details.id}`}</Text>
          <Text style={styles.content}>{`Name: ${details.productname}`}</Text>
          <Text style={styles.lastContent}>{`Quantity: ${
            details.quantity
          }`}</Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 20,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 10,
    textAlign: "center"
  },
  content: {
    marginLeft: 15,
    marginVertical: 8
  },
  lastContent: {
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 25
  }
});
