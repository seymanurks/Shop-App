import React from "react";
import { 
    View,
    Text,
    Image,
  } from "react-native";
  import styles from "./ShopCard.style"

  const ShopCard = ({products}) => {

    function isStock() {
      if (!products.inStock)
      return <Text style = {styles.inStock}>STOKTA YOK</Text>
    }

    return(
        <View style = {styles.container}>
          <View style = {styles.inner_container}>
            <Image style = {styles.image}
            source={{uri: products.imgURL}}
            />
            <Text style = {styles.title}>{products.title}</Text>
            <Text style = {styles.price}>{products.price}</Text>
            <Text>{isStock()}</Text>
         </View>
        </View>
    )
  }

  export default ShopCard;