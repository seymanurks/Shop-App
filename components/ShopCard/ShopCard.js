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
  import styles from "./ShopCard.style"

  const ShopCard = ({products}) => {

    return(
        <View style = {styles.container}>
        <Image style = {styles.image}
        source={{uri: products.imgURL}}
        />
        <Text style = {styles.title}>{products.title}</Text>
        <Text style = {styles.price}>{products.price}</Text>
      
        </View>
    )
  }

  export default ShopCard;