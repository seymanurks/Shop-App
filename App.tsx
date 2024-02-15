import React from "react";
import { 
  SafeAreaView,
  View,
  Text,
  FlatList, 
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TextInput
} from "react-native";

const App = () => {
  return (
    <SafeAreaView>
        <Text style = {styles.title}>PRODUCTS</Text>
          <View>
          <TextInput style = {styles.searcBar}
          placeholder="Arama yapın..."
          clearButtonMode="always"
          />
          </View>
      </SafeAreaView> 
  ) 
}

export default App;

const styles = StyleSheet.create({
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