import React from "react";
import { 
  SafeAreaView,
  View,
  Text,
  FlatList, 
  StyleSheet,
  Image,
  TextInput
} from "react-native";
import shop_data from "./shop_data.json"
import ShopCard from "./components/ShopCard";

const App = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <Text style = {styles.title}>PRODUCTS</Text>
          <TextInput style = {styles.searcBar}
          placeholder="Arama yapın..."
          clearButtonMode="always"
          />
          <FlatList 
          data = {shop_data}
          renderItem = {({item}) => <ShopCard products={item}/>}

          />
      </SafeAreaView> 
  ) 
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    marginBottom: 3,
    color: "purple"
  },
  searcBar: {
    backgroundColor: "#F0F0F0",
    margin: 10,
    marginTop: 3,
    borderRadius: 5,
    height: 30
  }
})