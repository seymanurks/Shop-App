import React from "react";
import { 
    View,
    Text,
    Image,
  } from "react-native";
  import styles from "./ShopCard.style"

  const ShopCard = ({products}) => {

    return(
        <View style = {styles.container}>
          <View style = {styles.inner_container}>
            <Image style = {styles.image}
            source={{uri: products.imgURL}}
            />
            <Text style = {styles.title}>{products.title}</Text>
            <Text style = {styles.price}>{products.price}</Text>
            <Text style = {styles.inStock}>{products.inStock}</Text>
         </View>
        </View>
    )
  }

  export default ShopCard;