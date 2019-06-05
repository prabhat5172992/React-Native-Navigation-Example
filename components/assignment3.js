import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Button,
  ActivityIndicator
} from "react-native";

export default class Assignment3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    fetch("http://192.168.1.103:3000/products")
      .then(response => response.json())
      .then(result => this.setState({ products: result }))
      .catch(err => console.log("An error occured:", err));
  }
  navigate = item => {
    this.props.navigate.navigate("Details", { data: item });
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.state.products.length ? (
          <React.Fragment>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text> Loading..... </Text>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Text style={styles.productTitle}> Products Information </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 15
              }}
            >
              <View
                style={{ flex: 2, alignItems: "flex-start", marginVertical: 5 }}
              >
                <Text style={styles.productHeader}>Id</Text>
              </View>
              <View
                style={{ flex: 3, alignItems: "flex-start", marginVertical: 5 }}
              >
                <Text style={styles.productHeader}>Name</Text>
              </View>
              <View
                style={{ flex: 5, alignItems: "center", marginVertical: 5 }}
              >
                <Text style={styles.productHeader}>Quantity</Text>
              </View>
            </View>
            <FlatList
              data={this.state.products}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 15
                  }}
                >
                  <View
                    style={{
                      flex: 2,
                      alignItems: "flex-start",
                      marginVertical: 5
                    }}
                  >
                    <Text style={styles.productsText}>{item.id}</Text>
                  </View>
                  <View
                    style={{
                      flex: 4,
                      alignItems: "flex-start",
                      marginVertical: 5
                    }}
                  >
                    <Text style={styles.productsText}>{item.productname}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      marginVertical: 5
                    }}
                  >
                    <Text style={styles.productsText}>{item.quantity}</Text>
                  </View>
                  <View
                    style={{
                      flex: 3,
                      alignItems: "flex-end",
                      marginVertical: 5
                    }}
                  >
                    <Button
                      style={{ marginHorizontal: 2 }}
                      title="DETAILS"
                      onPress={() => this.navigate(item)}
                    />
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </React.Fragment>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginVertical: 30
  },
  productTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    marginVertical: 10,
    marginHorizontal: 50
  },
  products: {
    marginVertical: 5,
    marginHorizontal: 30
  },
  productsText: {
    fontSize: 15,
    color: "blue",
    fontWeight: "bold"
  },
  productHeader: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
