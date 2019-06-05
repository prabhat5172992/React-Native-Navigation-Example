import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Assignment3 from "./components/assignment3";
import About from "./components/about";
import DetailsScreen from "./components/details";

class ProductsScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Products Page",
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
        <Assignment3 navigate={this.props.navigation} />
      </View>
    );
  }
}
const ProductsStack = createStackNavigator({
  Products: { screen: ProductsScreen },
  Details: { screen: DetailsScreen }
});

const AboutStack = createStackNavigator({
  About: { screen: About },
  Details: { screen: DetailsScreen }
});

const AppContainer = createAppContainer(
  createBottomTabNavigator(
    {
      Products: { screen: ProductsStack },
      About: { screen: AboutStack }
    },
    {
      tabBarOptions: {
        activeTintColor: "#0d13c4",
        inactiveTintColor: "#808080",
        style: {
          paddingVertical: 5,
          backgroundColor: "#fff"
        },
        labelStyle: {
          fontSize: 14,
          lineHeight: 20,
          fontWeight: "bold"
        }
      }
    }
  )
);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
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
